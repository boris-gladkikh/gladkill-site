import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import AlbumCard from './AlbumCard';
import {getAllAlbums} from './ApiCalls';
import './Music.css';

function Music() {
  let [isLoading, setIsLoading] = useState(true);
  let [albums, setAlbums] = useState([]);


  //mock data
  const albumsMock = [
    {
      id: 1,
      title: "What Goes On",
      coverUrl: "/covers/what-goes-on-cover.jpg"
    },
    {
      id: 2,
      title: "After Death",
      coverUrl: "/covers/after-death-cover.jpg"
    },
    {
      id: 3,
      title: "Lovelost",
      coverUrl: "/covers/lovelost-cover.jpg"
    },
    {
      id: 4,
      title: "Beta",
      coverUrl: "/covers/beta-cover.jpg"
    },
    {
      id: 5,
      title: "Accolades",
      coverUrl: "/covers/accolades-cover.jpg",
    }
  ]
  //useEffect
  useEffect(() => {
    async function fetchData() {
      let albumsData = await getAllAlbums();
      console.log(albumsData)
      setAlbums(albumsData);
    };
    fetchData();
    // console.log("this is album data", albums);
    setIsLoading(false);
    

  }
   , [])


  if (isLoading) {
    return (
      <div className="black container text-white text-center">
        <h1>Loading...</h1>
      </div>

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