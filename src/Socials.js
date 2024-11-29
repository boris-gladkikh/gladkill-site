import React from "react";
import './Socials.css';
function Socials() {
  return (
    <>
      <div className="socials mt-5">
        <a
          href="https://open.spotify.com/artist/7Kpco2hTnFKHUP1Gj8dA17"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-2x fab fa-spotify "></i>
        </a>
        <a
          href="https://itunes.apple.com/us/artist/gladkill/424432116"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-2x fab fa-apple "></i>
        </a>
        <a
          href="https://soundcloud.com/gladkill"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-2x fab fa-soundcloud "></i>
        </a>
        <a
          href="https://gladkill.bandcamp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-2x fab fa-bandcamp "></i>
        </a>
        <a
          href="https://www.facebook.com/gladkill/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-2x fab fa-facebook "></i>
        </a>
      </div>
    </>
  );
}

export default Socials;
