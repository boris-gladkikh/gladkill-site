import React, { useState } from 'react';
import "./AlbumCard.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function AlbumCard({ album }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  album.tracks.map((track) =>
    <li>track</li>
  )

  return (
    <>
      <div onClick={handleShow} className="albumCard btn text-white m-1 mb-5">
        <img className="img-fluid m-0" alt={`${album.title} cover`} src={album.coverUrl}></img>
        <small className="mb-5">{album.title}</small>
      </div>

      <Modal size="lg" centered className="text-center" show={show} onHide={handleClose}>
        <Modal.Header className="text-center black text-white" closeButton><h4>{album.title} - {album.year}</h4></Modal.Header>
        <Modal.Body bg="dark" className="darkColor" >
          <div>
            <Row>
              <Col sm="12" md="6">
                <img className=" modalCover img-fluid m-0" alt={`${album.title} cover`} src={album.coverUrl}></img>
              </Col>
              <Col sm="12" md="6">
             
                <Card className="cardSq" bg="dark" text="white">
                  <Card.Body className="text-left">
                    {album.detail}
                    <hr />
                    <a href={album.stream} rel="noopener noreferrer" target="_blank">  <h6>Stream Here</h6></a>
                    <a href={album.bandcamp} rel="noopener noreferrer" target="_blank">  <h6>Purchase Here</h6></a>
                    
                  </Card.Body>
                </Card>
                <Card className="text-center" bg="dark" text="white">
                    <Accordion>
                      <Accordion.Toggle as={Button} variant="link" className=" p-0 darkColor text-white hover" eventKey="0">
                        <h6 className="hover">Tracklist</h6>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <ul className="text-left px-4">
                          {album.tracks.map((track) =>
                            <li key={album.title}>{track}</li>
                          )}
                        </ul>
                      </Accordion.Collapse>
                    </Accordion>
                </Card>
              </Col>
            </Row>


          </div>

        </Modal.Body>
        <Button variant="dark" onClick={handleClose} className="text-white">Close</Button>

      </Modal>
    </>

  )

}

export default AlbumCard;