import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import AlbumCard from './AlbumCard';
import LoadingSpinner from './LoadingSpinner';
import { getAllAlbums } from './ApiCalls';
import './Music.css';

function Music() {
  let [somethingWrong, setSomethingWrong] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  let [albums, setAlbums] = useState([]);
  let sessionAlbums = JSON.parse(sessionStorage.albums);


  //fetch data from backend if albums or sessionStorage empty
  useEffect(() => {
    async function fetchData() {
      let albumsData = await getAllAlbums();
      if(albumsData === null){
        setSomethingWrong(true);
      }
      setAlbums(albumsData);
      sessionStorage.setItem('albums',JSON.stringify(albumsData));
      
    };
    if (albums.length === 0) {
      // if(sessionAlbums.length !== 0 ){
      //   setAlbums(sessionAlbums)
      // }
      fetchData();
    }
    setIsLoading(false);
    
  }
    , [albums, sessionAlbums])


  if (isLoading) {
    return (
      <LoadingSpinner />

    )
  }
  if (somethingWrong) {
    return (
      <div>
        <h4 className="text-danger text-center mt-5 mb-5">Something went wrong...</h4>
      </div>
    )
  }
  return (

    <div className="container">
      <div className="albumContainer mt-5">
        <Row>
          {albums.map((album) =>
            <Col key={album.title} xs={12} mx={3} className="column" >
              <AlbumCard
                id={album.title}
                key={album.title}
                album={album}
              />
            </Col>)}
        </Row>
      </div>

    </div>

  )
}

export default Music;