import React from 'react';
import "./Home.css";
import Card from 'react-bootstrap/Card';
import ccCover from './img/covers/coven-collection-cover.jpg';



function Home() {
  return (
    <div className="black container text-center text-white">
      <Card className="black text-white mt-5 mb-2">
        <Card.Img className="ccCover" variant="top" src={ccCover} />
        <Card.Title className="mt-4"><h4>Coven Collection Now Available.</h4></Card.Title>
        <Card.Text className="w-75 mauto text-center">
        Introducing the Coven Collection:
          19 tracks from 2016-2019 that have not seen the light of day, from WiPs to mixtape exclusives to live-only tracks.
           <a href="https://gladkill.bandcamp.com/album/coven-collection">Download here</a>. <br/>
          Stream: <span><a  href="https://open.spotify.com/album/7pMQE3kI4iKJoUthxjBsIX">Spotify</a> </span> | <a className="d-inline" href="https://music.apple.com/us/album/coven-collection/1506424635">Apple</a> | <a className="d-inline" href="https://www.amazon.com/gp/product/B086RX38XF/ref=dm_ws_sp_ps_dp">Amazon</a> 

        </Card.Text>
    

      </Card>


    </div>
  )
}

export default Home;