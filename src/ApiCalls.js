import axios from 'axios';

const BASEURL = "https://gladkill-backend.herokuapp.com";

//NOT USING THESE FUNCTIONS FOR NOW OTHER THAN BOTTOM FUNCTION.

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

//post form data to backend
export async function postEmail(email) {
  try{
    let response = await axios.post(`${BASEURL}/emails`, email);
    return response.data;
    
  }
  catch(err){
    console.log(err);
  }
}

export const submitEmailData = async(dataObject) => {
  const headers =  {"Content-Type": "application/x-www-form-urlencoded" };

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  const encodedData = encode({"form-name": "contact-form", ...dataObject});
  try{
  const res = await axios.post("/", encodedData,{headers});
  return res.data;
  } catch (err){
    console.error(err);
  }
};





