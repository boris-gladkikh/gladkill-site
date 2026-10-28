import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import portraitImg from "./img/gk-vert-2024.jpg";

// Contact page — see artist-website-redesign/contact/Gladkill Rail - Contact Spec.md.
// Desktop: content | sticky full-height photo. Mobile: title, photo, then the sections.

const EMAIL = "taryn@triplea.agency";
const [EMAIL_USER, EMAIL_DOMAIN] = EMAIL.split("@");

const listenLinks = [
  { label: "Spotify", href: "https://open.spotify.com/artist/7Kpco2hTnFKHUP1Gj8dA17" },
  { label: "Apple Music", href: "https://music.apple.com/us/artist/gladkill/424432116" },
  { label: "SoundCloud", href: "https://soundcloud.com/gladkill" },
  { label: "Bandcamp", href: "https://gladkill.bandcamp.com/" },
  { label: "Instagram", href: "https://www.instagram.com/gladkill/" },
  { label: "Facebook", href: "https://www.facebook.com/gladkill/" },
  { label: "Patreon", href: "https://patreon.com/gladkill" },
];

const COPIED_MS = 1800;

// Clipboard API where available (needs https or localhost), else the old textarea fallback.
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}

function CopyButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onCopy = async () => {
    try {
      await copyText(EMAIL);
    } catch (e) {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), COPIED_MS);
  };

  // Desktop swaps the label; mobile keeps it and swaps the "Tap" hint on the right.
  return (
    <>
      <button type="button" className="cta contact-copy" onClick={onCopy}>
        <span className="contact-copy-desktop">{copied ? "Copied ✓" : "Copy address"}</span>
        <span className="contact-copy-mobile">Copy address</span>
        <span className="contact-copy-hint" aria-hidden="true">
          {copied ? "Copied ✓" : "Tap"}
        </span>
      </button>
      {/* outside the button so it isn't read as part of the button's name */}
      <span className="sr-only" role="status">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
}

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <div className="contact-content">
        <h1 className="page-title">Contact</h1>

        <section className="contact-section contact-press">
          <h2 className="section-label">Press &amp; booking</h2>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            <span>{EMAIL_USER}@</span>
            <span>{EMAIL_DOMAIN}</span>
          </a>
          <div className="cta-row">
            <a className="cta is-primary" href={`mailto:${EMAIL}`}>
              <span>Send email</span>
              <span aria-hidden="true">↗</span>
            </a>
            <CopyButton />
          </div>
        </section>

        <section className="contact-section contact-follow">
          <h2 className="section-label">Listen &amp; follow</h2>
          <ul className="contact-links">
            {listenLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <span className="contact-link-name">{link.label}</span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* mobile only; the socials row is left off because the page already lists them */}
        <footer className="contact-footer">© Gladkill</footer>
      </div>

      <div className="contact-photo">
        <img src={portraitImg} alt="Gladkill in front of a painted mural" />
      </div>
    </div>
  );
}

export default Contact;
