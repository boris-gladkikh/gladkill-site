import React from 'react';
import "./Home.css";
import BlogList from './BlogList';




function Home() {

  return (
    <div className="black container text-center"> 
      <h3 className="my-3 text-white">LATEST</h3>
      <BlogList />
    </div>
  )
}

export default Home;