import React from 'react';
import Card from 'react-bootstrap/Card';
import './BlogPostCard.css';

//Card component for posts. Child of bloglist component. basic card with image/description. 


function BlogPostCard({ title, imgSrc, body, createdOn }) {
  return (
    <Card className=" blog-card text-white my-3">
      <Card.Header>
        <h3>{title}</h3>
        <small>{createdOn}</small>
      </Card.Header>
      <Card.Body>
        <img className="blog-img mb-3"  src={imgSrc} alt={`detail img for "${title}"`} />
        <p className="px-4">{body}</p>
      </Card.Body>
    </Card>
  )
}

export default BlogPostCard;