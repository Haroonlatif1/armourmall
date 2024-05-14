import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Firstani from "./animation/firstani"

import './contactus.css'; 

const ContactUsPage = () => {
    return (
        <Container className="contact-container">
            <Row className="mt-4 ">
               <div className='d-flex flying-image justify-content-center'><img src='/hero-image-3.png' alt='Not found'  height={"400px"}></img></div> 
                <Col>
                    <h1 ><div className='flying-image'>Contact Us  <FontAwesomeIcon icon={faEnvelope} /> </div>
                        </h1>
                    <p className="contact-description flying-image">We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
                </Col>
            </Row>

            <Row className="mt-4 ">
                <Col md={6}>
                    <Form className="contact-form flying-image">
                        
                        <Form.Group controlId="formName">
                            <Form.Label >Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email address" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="submit-button">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={6} className="contact-info flying-image bg-success text-light">
                    <h2>Contact Information</h2>
                    <p>Email: haroonlatif33@gmail.com</p>
                    <p>Phone: +92-309-1487973</p>
                    <p>Address: 123 Street, Lahore, Pakistan</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUsPage;
