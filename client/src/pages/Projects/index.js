import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { ssEcomportfolio,ssRetailportfolio,ssportfolio, meta } from "../../content_option";



//Ecommerce screenhshot configurations
export const EcomProject = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? ssEcomportfolio.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === ssEcomportfolio.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Ecom Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Ecom Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="gallery-grid">
          {ssEcomportfolio.map((data, i) => (
            <div key={i} className="gallery-item" onClick={() => handleOpen(i)}>
              <img src={data.img} alt="" className="gallery-img" />
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
        <div className="lightbox">
            <button className="close-btn" onClick={handleClose}>
            ✕
            </button>
            <button className="nav-btn prev" onClick={handlePrev}>
            &#10094;
            </button>
            <img
            src={ssEcomportfolio[selectedIndex].img}
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

//Retail screenhshot configurations
export const RetailProject = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? ssRetailportfolio.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === ssRetailportfolio.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Retail Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Retail Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="gallery-grid">
          {ssRetailportfolio.map((data, i) => (
            <div key={i} className="gallery-item" onClick={() => handleOpen(i)}>
              <img src={data.img} alt="" className="gallery-img" />
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
        <div className="lightbox">
            <button className="close-btn" onClick={handleClose}>
            ✕
            </button>
            <button className="nav-btn prev" onClick={handlePrev}>
            &#10094;
            </button>
            <img
            src={ssRetailportfolio[selectedIndex].img}
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


//Portfolio screenhshot configurations
export const PortfolioProject = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? ssportfolio.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === ssportfolio.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="gallery-grid">
          {ssportfolio.map((data, i) => (
            <div key={i} className="gallery-item" onClick={() => handleOpen(i)}>
              <img src={data.img} alt="" className="gallery-img" />
              <div className="content">
                  <p>{data.description}</p>
                </div>
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
        <div className="lightbox">
            <button className="close-btn" onClick={handleClose}>
            ✕
            </button>
            <button className="nav-btn prev" onClick={handlePrev}>
            &#10094;
            </button>
            <img
            src={ssportfolio[selectedIndex].img}
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
