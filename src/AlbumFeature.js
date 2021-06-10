import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import blogPosts from "./blogPosts";

function AlbumFeature() {
  const currentPost = blogPosts.filter(
    (post) => post.title === "Ossuary Out Now!"
  )[0];

  let links = currentPost.links?.map((link) => {
    return (
      <li>
        <a href={link.url} target="_blank" rel="noreferrer noopener">
          <em>{link.name}</em>
        </a>
      </li>
    );
  });
  return (
    <Card className="black text-white">
      <Card.Body>
        <h3 className="text-center">FEATURED ALBUM: OSSUARY</h3>
        <Row>
          <Col md={12} lg={6}>
            <img
              className="img-fluid pt-2"
              src={"/covers/ossuary-cover.jpg"}
              alt="ossuary cover"
            />
            <small>
              <strong>Genre:</strong> post-dubstep / bass / wave
              <br />
              <strong>Release Date:</strong> May 18, 2021
            </small>
            <ul>{links}</ul>
          </Col>
          <Col md={12} lg={6}>
            <Card.Text>
              <em>Ossuary</em> has been a longtime coming. His official follow
              up to 2016’s <em>After Death</em>, Ossuary is a collection of
              post-dubstep compositions with influences ranging from wave,
              garage, grime, bass music, trap, melodic hip hop to everything
              in-between. With a heavy emphasis on melody and harmony, Gladkill
              has put together a compendium of songs that go beyond their
              electronic origin. <br />
              <br />
              <em>
                "I wanted to write tracks with recognizable and unforgettable
                melodies. If I was to sit down at a piano, or pick up a guitar
                and play a phrase, you would know exactly which song I was
                playing.”
              </em>
              <br />
              <br />
              An ossuary is a building, chest or site made to serve as the final
              resting place of human remains. The album was influenced by
              Gladkill’s father’s passing in late 2017. With the album nearing
              completion in late 2018, the drive holding the primary project
              files for the album was damaged and the backup corrupted. Feeling
              completely dis- heartened, Gladkill stepped away from releasing
              new music and left a lot of the tracks on this album unfinished
              and abandoned. With renewed musical inspiration (and a good amount
              of free time due to COVID) Gladkill painstakingly rebuilt and
              re-recorded the original tracks and wrote new material to
              accompany the original vision throughout 2019 and 2020. The
              release of this album marks a tremendous burden removed from the
              artist’s shoulders. With a reinvigorated passion for songwriting
              and performance, Gladkill is back, and is ready to continue
              pushing and evolving the melodic low end sound that he has helped
              pioneer.
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AlbumFeature;
