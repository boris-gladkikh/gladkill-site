import React from 'react';
import tourPosts from "./tourPosts";
import "./TourList.css";

export default function TourList(){
  return(
    <div container mt="3">
      {tourPosts.length ? 
        tourPosts.map((post) => {
 
          return(
          <div className="tour-item">
            <span className="tour-item-section">
              <strong> {post.date}</strong>
           
            </span>
            <span className="tour-item-section" id="venue-section">
            {post.venue}
            </span>
            <span className="tour-item-section">
            {post.location}
            </span>
            <span className="tour-item-section" id="button-section">
              <button className="ticket-btn">Tickets</button>
            </span>

          </div>)

        } ):<div className="no-posts"> <em>No upcoming dates...</em></div>
      }

    </div>
  )
}