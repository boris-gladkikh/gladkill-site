import React from "react";
import { NavLink, useParams } from "react-router-dom";
import blogPosts from "./blogPosts";
import "./BlogPostDetail.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
        <h6>
          <em>Published {currentPost.createdOn}</em>
        </h6>
      </div>

        <div className="grid-contain">

        <Row>
          <Col md={12} lg={6} className="px-0">
            <div className="detail-img-container">
              <img
                id="post-detail-img"
                src={currentPost.imgSrc}
                alt={currentPost.title}
              />
            </div>
          </Col>
          <Col md={12} lg={6} className="px-0">
            <div id="post-detail-text">
              <p>{currentPost.body}</p>
              <ul>{links}</ul>
            </div>
          </Col>
        </Row>
        </div>
      <NavLink exact to="/">
        <p id="blog-detail-back-btn">Back</p>
      </NavLink>

    </div>
  );
}

