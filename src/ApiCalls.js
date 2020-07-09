import axios from 'axios';

//goes to JSON server right now, will change to production server 
const BASEURL = "http://localhost:3001";

//get individual album
export async function getAlbum(id){
  try{
    let response = await axios.get(`${BASEURL}/albums/${id}`);
    return response.data
  }
  catch(err){
    console.log(err);
  }
}

//retrieve all albums from backend
export async function getAllAlbums(){
  try{
    let response = await axios.get(`${BASEURL}/albums`);
    return response.data
  }
  catch(err){
    console.log(err);
  }
}

//TODO - get post
//TODO - get all posts
//TODO - post formdata to queries 





