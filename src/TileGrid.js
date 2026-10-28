import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TileGrid.css";

// Square artwork grid shared by News and Music.
// Desktop: caption rises in on hover / focus. Mobile: caption always shown
// below the image; a tap zooms the tile and fades the others.

// A touch that moves further than this is a scroll, not a tap.
const TAP_SLOP = 10;

function TileGrid({ items, className = "" }) {
  const [pressed, setPressed] = useState(null);
  const touchStart = useRef(null);

  const onTouchStart = (index) => (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
    setPressed(index);
  };

  const onTouchMove = (e) => {
    if (!touchStart.current) return;
    const t = e.touches[0];
    const dx = Math.abs(t.clientX - touchStart.current.x);
    const dy = Math.abs(t.clientY - touchStart.current.y);
    if (dx > TAP_SLOP || dy > TAP_SLOP) {
      touchStart.current = null;
      setPressed(null);
    }
  };

  const onTouchEnd = () => {
    touchStart.current = null;
    setPressed(null);
  };

  return (
    <div
      className={`tile-grid ${className}${pressed !== null ? " has-pressed" : ""}`}
    >
      {items.map((item, i) => (
        <Link
          key={item.key}
          to={item.to}
          className={`tile${pressed === i ? " is-pressed" : ""}`}
          onTouchStart={onTouchStart(i)}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
        >
          <div className="tile-media">
            <img src={item.image} alt="" loading={i < 8 ? "eager" : "lazy"} />
          </div>
          <div className="tile-caption">
            <span className="tile-title">{item.title}</span>
            {item.meta && <span className="tile-meta">{item.meta}</span>}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TileGrid;
