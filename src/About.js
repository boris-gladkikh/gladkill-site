import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import "./About.css";
import img1 from './img/gk-live-lib.jpg'
import img2 from './img/gk-live-tulsa-3.jpg'
import img3 from './img/gk-live-bn-hollywood.jpg'
import img4 from './img/gk-live-san-diego-2.jpg'
import img5 from './img/gk-live-big-dub.jpg';
import img6 from './img/gk-bw-lib.jpg';
import Socials from './Socials';

function About() {
  return (
    <div className="black mt-5 px-3 container">
      <h3 className="mt-3 text-white text-center">ABOUT</h3>
      <Carousel className="pt-3">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img1}
            alt="gk closeup lib"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="gldkl live lib"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="gldkl live misc blue"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="gldkl live san diego"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="gldkl live big dub"
          />
        </Carousel.Item>
      </Carousel>
      <Card className="black text-white">
        <Card.Body>
          <Card.Text className="text-center font18">
            Refusing to stick to the comfort of one musical genre,
            Gladkill has rewarded audiences through the sheer
            diversity of his compositions, as he deftly moves between dominating dance
            floors with his sultry, bass-heavy club sounds, to captivating home
            stereo speakers with more downtempo and melodic material.
          </Card.Text>
          <Card.Text className="text-center pt-3 font18">
            With over 10 years of extensive touring and releases, Gladkill has risen to legacy artist status
            with a diverse catalog that spans over several genres, flavors and interpretations of the
            melodic bass sound he has helped pioneer. With a new album on the way in late 2020 and
            multiple other exciting projects in his pipeline, Gladkill continues to deliver thoughtful,
            progressive music that is sure to stand the test of time.
          </Card.Text>
        </Card.Body>
      </Card>
      <hr className="border-light mt-5" />

      <Card className="black text-white mt-5 mb-5">
        <Card.Body>
          <Card.Img variant="top" src={img6} />
          <Card.Text className="text-center mt-5 mb-5">
           <Socials />
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  )
}

export default About;