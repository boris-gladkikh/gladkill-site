import React from 'react';
import tourPosts from "./tourPosts";
import "./TourList.css";

export default function TourList(){
  return(
    <div container mt="3">
      {tourPosts.length ? 
        tourPosts.map((post) => {
 
          return(
          <div className="tour-item" key={post.date}>
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
              <a href={post.tickets} rel="noopener noreferrer" target="_blank" className="ticket-btn">Tickets</a>
            </span>

          </div>)

        } ):<div className="no-posts"> <em>No upcoming dates...</em></div>
      }

    </div>
  )
}