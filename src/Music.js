import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import AlbumCard from './AlbumCard';
import LoadingSpinner from './LoadingSpinner';
import { getAllAlbums } from './ApiCalls';
import './Music.css';

function Music() {
  let [somethingWrong, setSomethingWrong] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  let [albums, setAlbums] = useState([]);
  let [sessionAlbums, setSessionAlbums] = useState();
  let [errorMessage, setErrorMessage] = useState([]);

  //fetch data from backend if albums or sessionStorage empty

useEffect(() => {
    async function fetchData() {
      try{
        let albumsData = await getAllAlbums();
        if(albumsData === null){
          setSomethingWrong(true);
        }
        setAlbums(albumsData);
        sessionStorage.setItem('albums',JSON.stringify(albumsData));
        setSessionAlbums(JSON.parse(sessionStorage.albums)); 
      }
      catch(err){
        console.log("API call error", err);
        setErrorMessage(err=> (
          [...err, err.message]
        ));
        setSomethingWrong(true);
        setIsLoading(false);
        
      }
      finally{
        setIsLoading(false);
      }
    };
    if((!albums) || albums === null) {
      setSomethingWrong(true)
      setErrorMessage(err=> [...err, "Error Status: 500 - Cannot connect to server"]);
      setIsLoading(false);
    }
    if(albums.length === 0){
      setIsLoading(true);
      fetchData();

    }  
  }
    , [albums, sessionAlbums])  


  if (isLoading) {
    return (
      <LoadingSpinner />

    )
  }
  if (somethingWrong) {
    return (
      <div className="container">
        <h4 className="text-danger text-center mt-5 mb-5">{errorMessage.map(
          err=> err
        )}</h4>
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