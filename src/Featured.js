import React from "react";
import blogPosts from "./blogPosts";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

function Featured() {
  let featuredPosts = blogPosts.filter((post) => post.featured);
  let posts = featuredPosts.map((post) => {
    return (
      <Carousel.Item>
          <NavLink exact to={`/blog/${post.title}`}>
          <img
            className="d-block w-100 img-fluid"
            src={post.imgSrc}
            alt={post.title}
          />
      </NavLink>
        </Carousel.Item>
    );
  });

  console.log("featured", featuredPosts);
  return (
    <>
      <Carousel className="pt-3">{posts}</Carousel>
    </>
  );
}
export default Featured;
