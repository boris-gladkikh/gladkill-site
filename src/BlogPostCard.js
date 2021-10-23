import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import "./BlogPostCard.css";

//Card component for posts. Child of bloglist component. basic card with image/description.

function BlogPostCard({ title, imgSrc, body, createdOn }) {
  return (
    <NavLink exact to={`/blog/${title}`}>
      <Card className=" blog-card text-white my-2">
        <Card.Body  className="blog-card-body">
          <div className="img-box">
            <img
              className="blog-img "
              src={imgSrc}
              alt={`detail img for "${title}"`}
            />
          </div>

          <div className=" text-area ">
            <small>{createdOn}</small>
            <h5>{title}</h5>
            <p className="text-paragraph">{body}</p>
            <em>click for more...</em>
          </div>
        </Card.Body>
      </Card>
    </NavLink>
  );
}

export default BlogPostCard;
