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
      <h5 className="my-3 text-white">NEWS</h5>
      {/* <Featured /> */}
      <BlogList />
    </div>
  )
}

export default Home;