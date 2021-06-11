import React, { useState } from "react";
import "./AlbumCard.css";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AlbumCard({ album }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div onClick={handleShow} className="albumCard btn text-white m-1 mb-5">
        <img
          className="img-fluid m-0"
          alt={`${album.title} cover`}
          src={album.coverUrl}
        ></img>
        <small className="mb-5">{album.title}</small>
      </div>

      <Modal
        size="xl"
        centered
        className="text-center "
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          className="text-center black text-white modal-header-border"
          closeButton
        >
          <h4>
            {album.title} - {album.year}
          </h4>
        </Modal.Header>
        <Modal.Body className="black text-white modal-border">
          <div>
            <Row>
              <Col sm="12" md="6" className="p-1">
                <img
                  className=" modalCover img-fluid m-0"
                  alt={`${album.title} cover`}
                  src={album.coverUrl}
                ></img>
              </Col>
              <Col sm="12" md="6" className="p-1">
                    <iframe
                      title="player"
                      style={{ border: "0", width: "100%", height: "274px" }}
                      src={`https://bandcamp.com/EmbeddedPlayer/album=${album.embed}/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`}
                      seamless
                    >
                      <a href={album.bandcamp}>
                        {album.title} by Gladkill
                      </a>
                    </iframe>
                    <div  className="black text-white text-left">
                    {album.detail}
                    <br/>
                    <a
                      href={album.bandcamp}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {" "}
                      <small>Purchase Here</small>
                    </a>

                    </div>
                    
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AlbumCard;
