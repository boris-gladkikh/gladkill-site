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

  let links = currentPost.links?.map((link)=>{
    return(
     <li><a href={link.url} target="_blank" rel="noreferrer noopener">{link.name}</a></li> 
    )
  })

  return (
    <div className="App">
      <div className="blog-post-container">
        <img className="blog-post-img" src={currentPost.imgSrc} alt={currentPost.title}></img>
          <h6>{currentPost.createdOn}</h6>
        <div className="blog-post-body">
        <h1>{currentPost.title}</h1>
          <p>{currentPost.body}</p>
          <ul>
          {links}
          </ul>
        </div>
    
        <NavLink exact to="/">
          <p id="blog-detail-back-btn">Back</p>
        </NavLink>
      </div>
    </div>
  );
}

export default BlogPostDetail;
