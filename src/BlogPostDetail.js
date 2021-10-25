import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import blogPosts from "./blogPosts";
import "./BlogPostDetail.css";


export default function BlogPostDetail() {
  const blogTitle = useParams("title");

  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])

  let currentPost = blogPosts.filter(
    (album) => album.title === blogTitle.title
  );

  currentPost = currentPost[0];

  let links = currentPost.links?.map((link) => {
    return (
      <li key={link}>
        <a href={link.url} target="_blank" rel="noreferrer noopener">
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <div className="mt-5 container">
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

