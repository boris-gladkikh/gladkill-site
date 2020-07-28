import React from 'react';
import imgSkull from './img/skull.jpg';
import './LoadingSpinner.css';


function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <img src={imgSkull} className="spinner" alt="gladkill-skull" />
    </div>
    );

}
export default LoadingSpinner