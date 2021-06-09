import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import AlbumCard from "./AlbumCard";
import albums from "./albums.js";
import "./Music.css";

function Music() {
  return (
    <div className="container">
      <h3 className="mt-3 text-white text-center">DISCOGRAPHY</h3>
      <div className="albumContainer mt-5">
        <Row>
          {albums.albums.map((album) => (
            <Col key={album.title} xs={12} mx={3} className="column">
              <AlbumCard id={album.title} key={album.title} album={album} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Music;
