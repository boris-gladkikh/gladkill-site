import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Lightbox.css";

// Full-screen photo viewer: arrows / Esc on desktop, swipe on mobile.

const SWIPE_MIN = 60;
const pad = (n) => String(n).padStart(2, "0");

function Lightbox({ photos, index, onPrev, onNext, onClose }) {
  const photo = photos[index];
  const dialogRef = useRef(null);
  const touchStart = useRef(null);

  // Keep the latest handlers for the keyboard listener without re-binding it.
  const handlers = useRef({ onPrev, onNext, onClose });
  handlers.current = { onPrev, onNext, onClose };

  useEffect(() => {
    const returnFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current.focus();

    const onKey = (e) => {
      if (e.key === "Escape") handlers.current.onClose();
      else if (e.key === "ArrowLeft") handlers.current.onPrev();
      else if (e.key === "ArrowRight") handlers.current.onNext();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      if (returnFocus && returnFocus.focus) {
        returnFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx > 0) onPrev();
      else onNext();
    } else if (dy > SWIPE_MIN * 1.5 && dy > Math.abs(dx) * 1.5) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="lb-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      tabIndex={-1}
      ref={dialogRef}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="lb-bar" onClick={(e) => e.stopPropagation()}>
        <span className="lb-position">
          {pad(index + 1)} / {pad(photos.length)}
        </span>
        <button type="button" className="lb-close" onClick={onClose}>
          Close ×
        </button>
      </div>

      <figure className="lb-stage">
        <img
          key={photo.src}
          className="lb-img"
          src={photo.src}
          alt={photo.alt}
          onClick={(e) => e.stopPropagation()}
        />
      </figure>

      <button
        type="button"
        className="lb-nav is-prev"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        ←
      </button>
      <button
        type="button"
        className="lb-nav is-next"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        →
      </button>
    </div>,
    document.body
  );
}

export default Lightbox;
