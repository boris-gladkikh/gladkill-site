import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Rail.css";
import logo from "./img/Gladkill-white.png";

// Persistent site navigation. Desktop: 260px sticky rail on the left.
// Below 768px: sticky top bar with a full-screen menu overlay.

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Music", to: "/music" },
  { label: "Tour", to: "/tour" },
  { label: "Shop", href: "https://gladkillmusic.bigcartel.com" },
  { label: "Contact", to: "/contact" },
];

export const socials = [
  { label: "Bandcamp", href: "https://gladkill.bandcamp.com/" },
  { label: "SoundCloud", href: "https://soundcloud.com/gladkill" },
  { label: "Instagram", href: "https://www.instagram.com/gladkill/" },
  { label: "Patreon", href: "https://patreon.com/gladkill" },
];

// Post detail pages live under News, so Home stays active there.
const isHomeActive = (match, location) =>
  location.pathname === "/" || location.pathname.startsWith("/blog/");

function NavList({ className, onNavigate }) {
  return (
    <nav className={className} aria-label="Main">
      {navItems.map((item) =>
        item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
          >
            {item.label}
          </a>
        ) : (
          <NavLink
            key={item.label}
            exact={item.to === "/"}
            to={item.to}
            isActive={item.to === "/" ? isHomeActive : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </NavLink>
        )
      )}
    </nav>
  );
}

export function SocialLinks({ className }) {
  return (
    <div className={className}>
      {socials.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
          {s.label}
        </a>
      ))}
    </div>
  );
}

function Rail() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <aside className="rail">
        <div className="rail-inner">
          <Link to="/" className="rail-logo">
            <img src={logo} alt="Gladkill" />
          </Link>
          <NavList className="rail-nav" />
          <SocialLinks className="rail-socials" />
        </div>
      </aside>

      <header className="topbar">
        <Link to="/" className="topbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Gladkill" />
        </Link>
        <button
          type="button"
          className="topbar-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu">
          <NavList className="mobile-menu-nav" onNavigate={closeMenu} />
          <SocialLinks className="mobile-menu-socials" />
        </div>
      )}
    </>
  );
}

export default Rail;
