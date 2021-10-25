import React,  {useEffect} from 'react';
import "./Home.css";
import BlogList from './BlogList';


function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])

  return (
    <div className="mt-5 black container text-center"> 
      <h3 className="my-3 text-white">NEWS</h3>
      <BlogList />
    </div>
  )
}

export default Home;