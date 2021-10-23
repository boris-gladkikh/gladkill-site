import React from 'react';
import "./Home.css";
import BlogList from './BlogList';
import Featured from './Featured';




function Home() {

  return (
    <div className="black container text-center"> 
      {/* <h3 className="my-3 text-white">FEATURED</h3>
      <Featured /> */}
      <h3 className="my-3 text-white">NEWS</h3>
      <BlogList />
    </div>
  )
}

export default Home;