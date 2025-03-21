import React from "react";
import blogPosts from "./blogPosts";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import "./Featured.css";

function Featured() {
  let featuredPosts = blogPosts.filter((post) => post.featured);
  
  let posts = featuredPosts.map((post) => {
    return (
      <Carousel.Item>
        <div className="carousel-interior">

          <h3 className="carousel-text">{post.title.toUpperCase()}</h3>
          <NavLink exact to={`/blog/${post.title}`}>
            <img
              className="carousel-img"
              src={post.imgSrc}
              alt={post.title}
            />
          </NavLink>
        </div>
      </Carousel.Item>
    );
  });

  console.log("featured", featuredPosts);
  return (
    <div className="featured-container">
      <Carousel  className="carousel-root">{posts}</Carousel>
    </div>
  );
}
export default Featured;
