import React from 'react';
import "./AlbumCard.css";

function AlbumCard({album}){

  return (
    <div  className="albumCard btn text-white m-1 mb-5">
      <img className="img-fluid m-0" alt={`${album.title} cover`} src={album.coverUrl}></img>
  <small className="mb-5">{album.title}</small>
    </div>
  )

}

export default AlbumCard;