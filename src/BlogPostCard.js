import React from 'react';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import './BlogPostCard.css';

//Card component for posts. Child of bloglist component. basic card with image/description. 


function BlogPostCard({ title, imgSrc, body, createdOn }) {
  return (
    <NavLink exact to={`/blog/${title}`}>
    <Card className=" blog-card text-white my-3">
      <Card.Body>
        <img className="blog-img mb-3"  src={imgSrc} alt={`detail img for "${title}"`} />
        <div>
        <h3>{title}</h3>
        <small>{createdOn}</small>
        </div>
      </Card.Body>
    </Card>
    </NavLink>
  )
}

export default BlogPostCard;