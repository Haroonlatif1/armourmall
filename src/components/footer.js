import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark py-5" style={{ position: 'relative', bottom: '0', width: '100%',"color":"gray" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We specialize in providing high-quality armor products for various purposes, including personal protection, historical reenactments, and cosplay</p>
            <Link to="aboutus"><Button  variant="outline-success">Learn more</Button></Link>          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p><FontAwesomeIcon icon={faEnvelope} /> haroonlatif33@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +92 (309) 148-7973</p>
            <Link to="contactus"><Button  variant="outline-primary">Contact us</Button></Link>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="me-2"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://twitter.com" className="me-2"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://instagram.com/haroonlatif12"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
