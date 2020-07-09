import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import AlbumCard from './AlbumCard';
import './Music.css';

function Music() {

  //mock data
  const albumsMock = [
    {
      title: "What Goes On",
      coverUrl: ""
    },
    {
      title: "After Death",
      coverUrl: ""
    },
    {
      title: "Lovelost",
      coverUrl: ""
    },
    {
      title: "Coven Collection",
      coverUrl: ""
    },
    {
      title: "Accolades",
      coverUrl: "./img/covers/accolades-cover.jpg",
    }
  ]

  const albumMock = albumsMock[0];


  return (

    <div className="container">
      <div className="albumContainer">

        {/* this is where the code will go. */}
        <AlbumCard album={albumMock}></AlbumCard>
        <AlbumCard album={albumMock}></AlbumCard>
        <AlbumCard album={albumMock}></AlbumCard>
        <AlbumCard album={albumMock}></AlbumCard>
        <AlbumCard album={albumMock}></AlbumCard>
        <AlbumCard album={albumMock}></AlbumCard>
        <AlbumCard album={albumMock}></AlbumCard>
        <AlbumCard album={albumMock}></AlbumCard>
      </div>

    </div>

  )
}

export default Music;