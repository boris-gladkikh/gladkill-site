import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import AlbumCard from "./AlbumCard";
import albums from "./albums.js";

function Music() {
  return (
    <div className="mt-5 container text-center">
      <h5 className="mt-3 text-white text-center">DISCOGRAPHY</h5>
      <Card className="black text-white">
        <Card.Body>
          <Card.Text>
            (Only EP's and albums are listed below. Singles, mixtapes and remixes can be found on bandcamp and Soundcloud. )
          </Card.Text>
        </Card.Body>
      </Card>
      <Container>
        <Row>
          {albums.albums.map((album) => (
            <Col key={album.title} xs={12} md={6} lg={4} xl={3} mx={2}>
              <AlbumCard id={album.title} key={album.title} album={album} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Music;
