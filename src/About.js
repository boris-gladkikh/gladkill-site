import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./About.css";
import featuredReleases from "./featuredReleases";
import { SocialLinks } from "./Rail";
import heroImg from "./img/gk-denver-eternal.jpg";
import liveLib from "./img/gk-live-lib.jpg";
import liveMissionOne from "./img/gk-live-mission-ballroom-2023-one.jpg";
import liveMissionThree from "./img/gladkill-live-mission-ballroom-2023-three.jpg";
import liveSanDiego from "./img/gk-live-san-diego-2.jpg";
import liveBigDub from "./img/gk-live-big-dub.jpg";

const livePhotos = [
  { src: liveLib, alt: "Gladkill performing to a festival crowd" },
  { src: liveMissionOne, alt: "Gladkill live at Mission Ballroom" },
  { src: liveMissionThree, alt: "Gladkill on stage at Mission Ballroom" },
  { src: liveSanDiego, alt: "Gladkill live in San Diego" },
  { src: liveBigDub, alt: "Gladkill performing live" },
];

const listenLinks = [
  { label: "Spotify", url: "https://open.spotify.com/artist/7Kpco2hTnFKHUP1Gj8dA17" },
  { label: "Apple Music", url: "https://itunes.apple.com/us/artist/gladkill/424432116" },
  { label: "SoundCloud", url: "https://soundcloud.com/gladkill" },
  { label: "Bandcamp", url: "https://gladkill.bandcamp.com/" },
  { label: "Facebook", url: "https://www.facebook.com/gladkill/" },
  { label: "Patreon", url: "https://patreon.com/gladkill" },
];

function LiveStrip() {
  const stripRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const strip = stripRef.current;
    const cards = Array.from(strip.children);
    // At the end of the strip, the last card is the one in view.
    if (strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2) {
      setActive(cards.length - 1);
      return;
    }
    const start = strip.scrollLeft + cards[0].offsetLeft;
    let nearest = 0;
    cards.forEach((card, i) => {
      if (Math.abs(card.offsetLeft - start) < Math.abs(cards[nearest].offsetLeft - start)) {
        nearest = i;
      }
    });
    setActive(nearest);
  };

  const scrollTo = (i) => {
    const strip = stripRef.current;
    const card = strip.children[i];
    strip.scrollTo({
      left: card.offsetLeft - strip.children[0].offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="live-strip" ref={stripRef} onScroll={onScroll}>
        {livePhotos.map((photo) => (
          <div className="live-card" key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="live-dots">
        {livePhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={`live-dot${i === active ? " is-active" : ""}`}
            aria-label={`Show photo ${i + 1} of ${livePhotos.length}`}
            aria-current={i === active}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </>
  );
}

// Mobile: collapsible row with an animated height. Desktop: always open (CSS).
function FeaturedRelease({ release, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(defaultOpen ? "auto" : "0px");
  const panelRef = useRef(null);
  const firstRender = useRef(true);
  const panelId = `release-${release.title.toLowerCase().replace(/\W+/g, "-")}`;

  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const panel = panelRef.current;
    const full = `${panel.scrollHeight}px`;
    if (open) {
      setHeight(full);
    } else {
      // Pin the current height before collapsing so the transition has a start value.
      panel.style.height = full;
      // eslint-disable-next-line no-unused-expressions
      panel.offsetHeight;
      setHeight("0px");
    }
  }, [open]);

  const onTransitionEnd = (e) => {
    if (e.target === panelRef.current && e.propertyName === "height" && open) {
      setHeight("auto");
    }
  };

  return (
    <div className={`release${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="release-row"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <img className="release-thumb" src={release.coverUrl} alt="" />
        <span className="release-row-text">
          <span className="section-label">Featured album</span>
          <span className="release-row-title">{release.title}</span>
        </span>
        <span className="release-toggle" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        id={panelId}
        className="release-panel"
        ref={panelRef}
        style={{ height }}
        onTransitionEnd={onTransitionEnd}
      >
        <div className="release-inner">
          <div className="release-main">
            <div className="release-art">
              <img src={release.coverUrl} alt={`${release.title} cover`} />
            </div>

            <div className="release-info">
              <h2 className="release-title">{release.title}</h2>
              <dl className="release-meta">
                <div>
                  <dt>Genre</dt>
                  <dd>{release.genre}</dd>
                </div>
                <div>
                  <dt>Released</dt>
                  <dd>{release.released}</dd>
                </div>
              </dl>

              <div className="cta-row">
                {release.links.map((link, i) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cta${i === 0 ? " is-primary" : ""}`}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>

              <p className="release-description">{release.description}</p>
            </div>
          </div>

          <figure className="release-quote">
            <blockquote>“{release.quote}”</blockquote>
            <figcaption>— Gladkill</figcaption>
          </figure>

          <div className="release-story">
            <p className="section-label">The story</p>
            <p>{release.story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <header className="about-header">
        <h1 className="page-title">About</h1>
        <div className="about-hero">
          <img src={heroImg} alt="Gladkill performing at Black Box" />
        </div>
      </header>

      <section className="about-section about-bio">
        <p className="section-label">Bio</p>
        <p className="about-lead">
          Refusing to stick to the comfort of a single musical genre, Gladkill
          has rewarded audiences through the sheer diversity of his
          compositions, as he deftly moves between dominating dance floors with
          his sultry, bass-heavy club sounds, to captivating home stereo
          speakers with more downtempo and melodic material.
        </p>
        <p className="about-bio-more">
          With over 10 years of extensive touring and releases, Gladkill has
          risen to legacy artist status with a diverse catalog that spans over
          several genres, flavors and interpretations of the melodic bass sound
          he has helped pioneer. With new releases and exciting performances in
          store for 2026 and beyond, Gladkill continues to carve his own path
          in the ever-changing landscape of underground electronic music.
        </p>
      </section>

      <section className="about-section about-live">
        <p className="section-label">Live</p>
        <LiveStrip />
      </section>

      <section className="about-section about-featured">
        <p className="section-label about-featured-label">Featured album</p>
        {featuredReleases.map((release, i) => (
          <FeaturedRelease
            key={release.title}
            release={release}
            defaultOpen={featuredReleases.length > 1 && i === 0}
          />
        ))}
      </section>

      <section className="about-section about-listen">
        <p className="section-label">Listen &amp; follow</p>
        <div className="listen-grid">
          {listenLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="listen-tile"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </section>

      <SocialLinks className="page-socials about-socials" />
    </div>
  );
}

export default About;
