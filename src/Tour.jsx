import React, { useEffect } from "react";
import "./Tour.css";
import tourPosts from "./tourPosts";
import { SocialLinks, socials } from "./Rail";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const instagramUrl = socials.find((s) => s.label === "Instagram").href;
const bookingUrl = "mailto:taryn@triplea.agency";

// "YYYY-MM-DD" as a local date, so shows don't shift a day across time zones.
const parseDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const pad = (n) => String(n).padStart(2, "0");

// "SEP 13–14" / "AUG 30–SEP 1" and "FRI–SAT"
function formatShow(show) {
  const start = parseDate(show.start);
  const end = show.end ? parseDate(show.end) : start;
  const multiDay = end > start;
  let date = `${MONTHS[start.getMonth()]} ${start.getDate()}`;
  if (multiDay) {
    date +=
      end.getMonth() === start.getMonth()
        ? `–${end.getDate()}`
        : `–${MONTHS[end.getMonth()]} ${end.getDate()}`;
  }
  const days = multiDay
    ? `${DAYS[start.getDay()]}–${DAYS[end.getDay()]}`
    : DAYS[start.getDay()];
  return { date, days, year: start.getFullYear() };
}

const place = (show) => (show.country ? `${show.city}, ${show.country}` : show.city);

function splitShows(shows) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const withDates = shows.map((s) => ({
    ...s,
    startDate: parseDate(s.start),
    endDate: parseDate(s.end || s.start),
  }));
  return {
    upcoming: withDates
      .filter((s) => s.endDate >= today)
      .sort((a, b) => a.startDate - b.startDate),
    past: withDates
      .filter((s) => s.endDate < today)
      .sort((a, b) => b.startDate - a.startDate),
  };
}

function SectionHeader({ label, count }) {
  return (
    <div className="tour-section-header">
      <span>{label}</span>
      <span>{pad(count)}</span>
    </div>
  );
}

function UpcomingShow({ show }) {
  const { date, days, year } = formatShow(show);
  const content = (
    <>
      <div className="tour-up-date">
        <span className="tour-up-day">{date}</span>
        <span className="tour-up-sub">
          {days} · {year}
        </span>
      </div>
      <div className="tour-up-place">
        <span className="tour-up-venue">{show.venue}</span>
        <span className="tour-up-city">{place(show)}</span>
      </div>
      {show.tickets && (
        <span className="cta is-primary tour-tickets">
          <span>Tickets</span>
          <span aria-hidden="true">↗</span>
        </span>
      )}
    </>
  );

  return show.tickets ? (
    <a
      className="tour-up-row is-linked"
      href={show.tickets}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <div className="tour-up-row">{content}</div>
  );
}

function PastShow({ show }) {
  const { date, year } = formatShow(show);
  return (
    <li className="tour-past-row">
      <span className="tour-past-date">{date}</span>
      <span className="tour-past-place">
        <span className="tour-past-venue">{show.venue}</span>
        <span className="tour-past-city">{place(show)}</span>
      </span>
      <span className="tour-past-year">{year}</span>
    </li>
  );
}

export default function Tour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { upcoming, past } = splitShows(tourPosts);

  return (
    <div className="tour">
      <h1 className="page-title">Tour</h1>

      <section className="tour-section">
        <SectionHeader label="Upcoming" count={upcoming.length} />
        {upcoming.length > 0 ? (
          upcoming.map((show) => <UpcomingShow key={show.start + show.venue} show={show} />)
        ) : (
          <div className="tour-empty">
            <div>
              <p className="tour-empty-title">No dates announced</p>
              <p className="tour-empty-text">
                New shows are posted here and on Instagram first.
              </p>
            </div>
            <div className="cta-row">
              <a className="cta" href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <span>Follow on Instagram</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a className="cta" href={bookingUrl}>
                <span>Booking</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        )}
      </section>

      {past.length > 0 && (
        <section className="tour-section">
          <SectionHeader label="Past shows" count={past.length} />
          <ul className="tour-past">
            {past.map((show) => (
              <PastShow key={show.start + show.venue} show={show} />
            ))}
          </ul>
        </section>
      )}

      <SocialLinks className="page-socials tour-socials" />
    </div>
  );
}
