import React from "react";
import { NavLink, useParams } from "react-router-dom";
import blogPosts from "./blogPosts";
import "./BlogPostDetail.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BlogPostDetail() {
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
      </div>

        <div className="grid-contain">     
            <div className="detail-img-container">
              <img
                id="post-detail-img"
                src={currentPost.imgSrc}
                alt={currentPost.title}
              />
            </div>
            <div id="post-detail-text">
              <p className="text-center"><em>Published {currentPost.createdOn} </em></p>
              <p>{currentPost.body}</p>
              <ul>{links}</ul>
            </div>

        </div>
      <NavLink exact to="/">
        <p id="blog-detail-back-btn">Back</p>
      </NavLink>

    </div>
  );
}

