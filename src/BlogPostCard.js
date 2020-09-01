import React from 'react';
import Card from 'react-bootstrap/Card';

//Card component for posts. Child of bloglist component. basic card with image/description. 


function BlogPostCard({ title, imageUrl, body, createdOn }) {
  return (
    <Card>
      <Card.Header>
        <h1>{title}</h1>
        <h6>{createdOn}</h6>
      </Card.Header>
      <Card.Body>
        <img href={imageUrl} alt="post detail" />
        <p>{body}</p>
      </Card.Body>

    </Card>
  )
}

export default BlogPostCard;