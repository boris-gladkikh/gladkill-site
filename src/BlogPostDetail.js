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
    <div className="App">
      <div className="container">
   
        <div className="blog-post-body mt-5">
          <h6>
            <em>Published {currentPost.createdOn}</em>
          </h6>
          <h1>{currentPost.title}</h1>
          <p>{currentPost.body}</p>
          <ul>{links}</ul>
          <NavLink exact to="/">
            <p id="blog-detail-back-btn">Back</p>
          </NavLink>
        </div>
        <img
          className="blog-post-img"
          src={currentPost.imgSrc}
          alt={currentPost.title}
        ></img>
      </div>
    </div>
  );
}

export default BlogPostDetail;
