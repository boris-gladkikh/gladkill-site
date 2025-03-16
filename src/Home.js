import React,  {useEffect} from 'react';
import "./Home.css";
import BlogList from './BlogList';
// import Featured from './Featured';


function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])

  return (
    <div className="mt-5 black container text-center"> 
      {/* <h4 className="my-3 text-white">FEATURED</h4>
      <Featured /> */}
      <h5 className="my-3 text-white">NEWS</h5>
      <BlogList />
    </div>
  )
}

export default Home;