import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import AlbumCard from './AlbumCard';
import LoadingSpinner from './LoadingSpinner';
import { getAllAlbums } from './ApiCalls';
import './Music.css';

function Music() {
  let [isLoading, setIsLoading] = useState(true);
  let [albums, setAlbums] = useState([]);


  //fetch data from backend if albums empty
  useEffect(() => {
    async function fetchData() {
      let albumsData = await getAllAlbums();
      console.log(albumsData)
      setAlbums(albumsData);
    };
    if (albums.length === 0) {
      fetchData();
    }
    setIsLoading(false);

  }
    , [albums])


  if (isLoading) {
    return (
      <LoadingSpinner />

    )
  }
  return (

    <div className="container">
      <div className="albumContainer mt-5">
        <Row>
          {albums.map((album) =>
            <Col key={album.id} xs={12} mx={3} className="column" >
              <AlbumCard
                id={album.title}
                key={album.id}
                album={album}
              />
            </Col>)}
        </Row>
      </div>

    </div>

  )
}

export default Music;