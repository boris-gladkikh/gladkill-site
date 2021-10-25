import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import AlbumCard from "./AlbumCard";
import albums from "./albums.js";

function Music() {
  return (
    <div className="mt-5 container text-center">
      <h3 className="mt-3 text-white text-center">DISCOGRAPHY</h3>
      <Container>
        <Row>
          {albums.albums.map((album) => (
            <Col key={album.title} xs={12} md={6} lg={4} xl={3} mx={2} >
              <AlbumCard id={album.title} key={album.title} album={album} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Music;
