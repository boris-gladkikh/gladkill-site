import React from 'react';
import "./AlbumCard.css";
import img1 from "./img/covers/coven-collection-cover.jpg"

function AlbumCard({album}){

  return (
    <div  className="albumCard btn text-white m-3">
      <img className="img-fluid m-0" alt={`${album.title} cover`} src={img1}></img>
    </div>
  )

}

export default AlbumCard;