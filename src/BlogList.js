import React from "react";
import blogPosts from "./blogPosts";
import BlogPostCard from "./BlogPostCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//Container displaying blog post card components for posts. uses array from file (blogposts)

function BlogList() {
  let blogPostList = blogPosts.map((p) => (
    <Col key={p.title} xs={12} md={6} lg={4} xl={3} mx={5}>
      <BlogPostCard
        key={p.title}
        title={p.title}
        imgSrc={p.imgSrc}
        createdOn={p.createdOn}
        body={p.body}
      />
    </Col>
  ));

  return (
    <>
      <Container className="m-auto">
        <Row>{blogPostList}</Row>
      </Container>
    </>
  );
}

export default BlogList;
