import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./ReleaseWindow.css";

// Desktop: centered window over a blurred overlay.
// Mobile: full-screen sheet with a prev / next bar and swipe gestures.

const SWIPE_MIN = 60;
const pad = (n) => String(n).padStart(2, "0");

// Bandcamp's large player (no artwork): ~124px of controls, ~33px per track
// row. Long tracklists scroll inside the player past the max height.
const PLAYER_CONTROLS = 120;
const PLAYER_ROW = 33;
const PLAYER_MAX = 300;

function playerFor(release) {
  const tracks = release.trackCount || 1;
  const showTracklist = tracks > 1;
  const kind = release.embedType || "album";
  return {
    src: `https://bandcamp.com/EmbeddedPlayer/${kind}=${release.embed}/size=large/bgcol=000000/linkcol=ffffff/artwork=none/tracklist=${showTracklist}/transparent=true/`,
    height: showTracklist
      ? Math.min(PLAYER_CONTROLS + 16 + tracks * PLAYER_ROW, PLAYER_MAX)
      : PLAYER_CONTROLS,
  };
}

function ReleaseWindow({ releases, index, onPrev, onNext, onClose }) {
  const release = releases[index];
  const player = playerFor(release);
  const prev = releases[(index - 1 + releases.length) % releases.length];
  const next = releases[(index + 1) % releases.length];
  const windowRef = useRef(null);
  const touchStart = useRef(null);

  // Keep the latest handlers for the keyboard listener without re-binding it.
  const handlers = useRef({ onPrev, onNext, onClose });
  handlers.current = { onPrev, onNext, onClose };

  useEffect(() => {
    const returnFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    windowRef.current.focus();

    const onKey = (e) => {
      if (e.key === "Escape") handlers.current.onClose();
      else if (e.key === "ArrowLeft") handlers.current.onPrev();
      else if (e.key === "ArrowRight") handlers.current.onNext();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      if (returnFocus && returnFocus.focus) returnFocus.focus();
    };
  }, []);

  // Each release starts at the top of the sheet.
  useEffect(() => {
    windowRef.current.scrollTop = 0;
  }, [index]);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = {
      x: t.clientX,
      y: t.clientY,
      atTop: windowRef.current.scrollTop <= 0,
    };
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
    } else if (start.atTop && dy > SWIPE_MIN * 1.5 && dy > Math.abs(dx) * 1.5) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="rw-overlay" onClick={onClose}>
      <div
        className="rw-window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rw-title"
        tabIndex={-1}
        ref={windowRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="rw-bar">
          <span className="rw-position">
            {pad(index + 1)} / {pad(releases.length)}
          </span>
          <div className="rw-bar-actions">
            <button type="button" className="rw-bar-btn rw-bar-nav" onClick={onPrev}>
              ← Prev
            </button>
            <button type="button" className="rw-bar-btn rw-bar-nav" onClick={onNext}>
              Next →
            </button>
            <button type="button" className="rw-bar-btn rw-bar-close" onClick={onClose}>
              Close ×
            </button>
          </div>
        </div>

        <div className="rw-body">
          <div className="rw-art">
            <img src={release.coverUrl} alt={`${release.title} cover`} />
          </div>

          <div className="rw-info">
            <div>
              <p className="rw-meta">
                {release.type} — {release.year}
              </p>
              <h2 id="rw-title" className="rw-title">
                {release.title}
              </h2>
            </div>

            <div className="rw-player">
              <iframe
                key={release.embed}
                title={`${release.title} player`}
                src={player.src}
                style={{ height: player.height }}
                seamless
              >
                <a href={release.bandcamp}>{release.title} by Gladkill</a>
              </iframe>
            </div>

            {release.detail && (
              <p className="rw-description">{release.detail}</p>
            )}

            <div className="cta-row">
              <a
                className="cta is-primary"
                href={release.bandcamp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Buy on Bandcamp</span>
                <span aria-hidden="true">↗</span>
              </a>
              {release.stream && release.stream !== release.bandcamp && (
                <a
                  className="cta"
                  href={release.stream}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Stream</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <nav className="rw-pager" aria-label="Releases">
          <button type="button" className="rw-pager-btn" onClick={onPrev}>
            <span className="rw-pager-label">← Prev</span>
            <span className="rw-pager-title">{prev.title}</span>
          </button>
          <button type="button" className="rw-pager-btn is-next" onClick={onNext}>
            <span className="rw-pager-label">Next →</span>
            <span className="rw-pager-title">{next.title}</span>
          </button>
        </nav>
      </div>
    </div>,
    document.body
  );
}

export default ReleaseWindow;
