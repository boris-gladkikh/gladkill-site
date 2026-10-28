import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import blogPosts from "./blogPosts";
import NotFound from "./NotFound";
import { SocialLinks } from "./Rail";
import "./BlogPostDetail.css";

const TRACK_COLUMNS = 3;

const isGladkillTrack = (track) => /^gladkill\b/i.test(track);

// Shared links may arrive with characters like ":" still percent-encoded.
const decodeTitle = (title) => {
  try {
    return decodeURIComponent(title);
  } catch (e) {
    return title;
  }
};

export default function BlogPostDetail() {
  const { title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const post = blogPosts.find(
    (p) => p.title === title || p.title === decodeTitle(title)
  );

  if (!post) return <NotFound />;

  const links = post.links || [];
  const tracks = post.tracks || [];
  const meta = [post.kind, post.createdOn].filter(Boolean).join(" — ");

  return (
    <article className="post">
      <Link to="/" className="post-back">
        ← Back to news
      </Link>

      <div className="post-hero">
        <img src={post.imgSrc} alt={post.title} />
      </div>

      <div className="post-content">
        <header className="post-header">
          <p className="post-meta">{meta}</p>
          <h1 className="post-title">{post.title}</h1>
        </header>

        <div className="post-body">
          <p>{post.body}</p>
          {links.length > 0 && (
            <div className="post-links">
              {links.map((link, i) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`post-link${i === 0 ? " is-primary" : ""}`}
                >
                  <span>{link.name}</span>
                  <span className="post-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {tracks.length > 0 && (
        <section className="post-tracklist" aria-label="Tracklist">
          <p className="post-tracklist-label">Tracklist · {tracks.length}</p>
          <ol
            className="post-tracks"
            style={{
              "--track-rows": Math.ceil(tracks.length / TRACK_COLUMNS),
            }}
          >
            {tracks.map((track, i) => (
              <li
                key={i}
                className={isGladkillTrack(track) ? "is-gladkill" : undefined}
              >
                <span className="post-track-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{track}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <SocialLinks className="page-socials post-socials" />
    </article>
  );
}
