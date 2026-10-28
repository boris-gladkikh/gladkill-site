import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Music.css";
import albums from "./albums.js";
import TileGrid from "./TileGrid";
import ReleaseWindow from "./ReleaseWindow";
import { SocialLinks } from "./Rail";

const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Newest first. albums.js is kept in release order, oldest first.
const releases = albums.albums
  .slice()
  .reverse()
  .map((album) => ({ ...album, slug: slugify(album.title) }));

function Music() {
  const history = useHistory();
  const location = useLocation();
  const slug = new URLSearchParams(location.search).get("release");
  const index = releases.findIndex((r) => r.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = releases.map((r) => ({
    key: r.slug,
    to: { pathname: "/music", search: `?release=${r.slug}`, state: { fromGrid: true } },
    image: r.coverUrl,
    title: r.title,
    meta: `${r.type} — ${r.year}`,
  }));

  const goTo = (i) => {
    const next = (i + releases.length) % releases.length;
    history.replace({ ...location, search: `?release=${releases[next].slug}` });
  };

  // Opened from the grid: step back so the back button/gesture stays in sync.
  // Opened from a shared link: drop the query instead.
  const close = () => {
    if (location.state && location.state.fromGrid) history.goBack();
    else history.replace("/music");
  };

  return (
    <div className="music">
      <header className="music-header">
        <h1 className="page-title">Discography</h1>
        <p className="music-note">
          Also on{" "}
          <a href="https://gladkill.bandcamp.com/" target="_blank" rel="noopener noreferrer">
            Bandcamp
          </a>{" "}
          and{" "}
          <a href="https://soundcloud.com/gladkill" target="_blank" rel="noopener noreferrer">
            SoundCloud
          </a>
          .
        </p>
      </header>

      <TileGrid items={items} className="music-grid" />

      <SocialLinks className="page-socials music-socials" />

      {index !== -1 && (
        <ReleaseWindow
          releases={releases}
          index={index}
          onPrev={() => goTo(index - 1)}
          onNext={() => goTo(index + 1)}
          onClose={close}
        />
      )}
    </div>
  );
}

export default Music;
