import React from 'react';
import blogPosts from './blogPosts';
import BlogPostCard from './BlogPostCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

//Container displaying blog post card components for posts. uses array from file (blogposts)

function BlogList() {
  let blogPostList = blogPosts.map(p => (
    <Col md="12">
      <BlogPostCard
        title={p.title} 
        imgSrc={p.imgSrc}
        createdOn={p.createdOn}
        description={p.description}
        body={p.body}/>
    </Col>
  ));

  return (
    <>
      <Container>
        <Row>
          {blogPostList}
        </Row>
      </Container>
    </>
  )
}

export default BlogList