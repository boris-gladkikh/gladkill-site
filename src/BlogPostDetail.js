import React from "react";
import { NavLink, useParams } from "react-router-dom";
import blogPosts from "./blogPosts";
import "./BlogPostDetail.css";

function BlogPostDetail() {
  const blogTitle = useParams("title");

  let currentPost = blogPosts.filter(
    (album) => album.title === blogTitle.title
  );

  currentPost = currentPost[0];

  let links = currentPost.links?.map((link) => {
    return (
      <li>
        <a href={link.url} target="_blank" rel="noreferrer noopener">
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <div className="container">
      <div id="post-detail-header">
        <h1>{currentPost.title}</h1>
        <h6>
          <em>Published {currentPost.createdOn}</em>
        </h6>
      </div>
      <img
        id="post-detail-img"
        src={currentPost.imgSrc}
        alt={currentPost.title}
      />
      <div id="post-detail-text">
        <p>{currentPost.body}</p>
        <ul>{links}</ul>
        <NavLink exact to="/">
          <p id="blog-detail-back-btn">Back</p>
        </NavLink>
      </div>
    </div>
  );
}

export default BlogPostDetail;
