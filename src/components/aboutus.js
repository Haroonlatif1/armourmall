import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './aboutuspage.css'; // Import custom CSS file for additional styling

const AboutUsPage = () => {
    return (
        <Container className="about-us-container mt-3">
            <Row className="mt-3">
                <Col>
                    <h1 className="about-us-title text-center">About Us</h1>
                    <p className="ll container display-6 text-center">"Welcome to Armor Mall, your premier destination for all things armor-related. We specialize in providing high-quality armor products for various purposes, including personal protection, historical reenactments, and cosplay"</p>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h2 className="about-us-section-title text center">Our Mission</h2>
                    <p className="about-us-description">Our mission is to provide top-notch armor products that combine quality craftsmanship, durability, and functionality. We aim to meet the diverse needs of our customers by offering a comprehensive selection of armor solutions, backed by excellent customer service and expert guidance.</p>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h2 className="about-us-section-title">Our Vision</h2>
                    <p className="about-us-description">Our vision is to become the leading provider of armor products globally, recognized for our commitment to excellence, innovation, and customer satisfaction. We strive to continuously improve and expand our product offerings while maintaining the highest standards of quality and integrity.</p>
                </Col>
            </Row>

            

            <Row className="mt-4">
                <Col>
                    <h2 className="about-us-section-title">Meet the Team</h2>
                    <p className="about-us-description">Our team consists of passionate individuals with diverse backgrounds and expertise in the armor industry.We have experienced workers who are expert in manufacturing the weapons and armours.Get to know some of the key members of our team</p>
                   
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUsPage;
