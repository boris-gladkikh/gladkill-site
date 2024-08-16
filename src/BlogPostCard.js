import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import "./BlogPostCard.css";

function BlogPostCard({ title, imgSrc, body, createdOn }) {
  return (
    <NavLink exact to={`/blog/${title}`}>
      <Card className=" blog-card text-white my-2">
        <img
          className="blog-img "
          src={imgSrc}
          alt={`detail img for "${title}"`}
        />

        <div className=" text-area ">
          <small>{createdOn}</small>
          <h5>{title}</h5>
          <p className="text-paragraph">{body}</p>
          <div className="text-footer">
            <small>
              <em>click for more...</em>
            </small>
          </div>
        </div>
      </Card>
    </NavLink>
  );
}

export default BlogPostCard;
