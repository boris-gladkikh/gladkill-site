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
  console.log(currentPost);

  return (
    <div className="App">
      <div className="blog-post-container">
        <img className="blog-post-img" src={currentPost.imgSrc} alt={currentPost.title}></img>

        <h1>{currentPost.title}</h1>
          <h6>{currentPost.createdOn}</h6>
        <div className="blog-post-body">
          <p>{currentPost.body}</p>
        </div>
        <NavLink exact to="/">
          <p id="blog-detail-back-btn">Go Back</p>
        </NavLink>
      </div>
    </div>
  );
}

export default BlogPostDetail;
