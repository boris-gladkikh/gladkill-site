import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import AlbumCard from "./AlbumCard";
// import LoadingSpinner from './LoadingSpinner';
import albums from "./albums.js";
// import { getAllAlbums } from './ApiCalls';
import "./Music.css";

//no longer uses server, just populates album data from file
function Music() {
  return (
    <div className="container">
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
