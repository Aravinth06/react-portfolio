import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? dataportfolio.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === dataportfolio.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="gallery-grid">
          {dataportfolio.map((data, i) => (
            <div key={i} className="gallery-item" onClick={() => handleOpen(i)}>
              <img src={data.img} alt="" className="gallery-img" />
              <div className="content">
                <p>{data.description}</p>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // prevent triggering parent click
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="lightbox">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <button className="nav-btn prev" onClick={handlePrev}>
              &#10094;
            </button>
            <img
              src={dataportfolio[selectedIndex].img}
              alt=""
              className="lightbox-img"
            />
            <button className="nav-btn next" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};

