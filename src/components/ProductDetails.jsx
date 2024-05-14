import React, { useContext, useState, useRef } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCheckCircle, faStar, faStarHalfAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import Errorpopup from "./inputformpop";
import Slider from 'react-slick'; 
import { contextz } from './context';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './newcard.css';

const ProductDetails = () => {
    const b = useContext(contextz);
    const { addToCart } = b;
    const { productId } = useParams();
    const product = JSON.parse(decodeURIComponent(productId));
    const sliderRef = useRef(null); // Reference to the Slider component

    const [buttontext, setbuttontext] = useState(" Add to cart");
    const [review, setReview] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "New York, USA",
            location: "Slightly over-rated but still a good weapon. I am recommending this",
            profilePic: faUserCircle ,
            ratings:3.5
          
        },
        {
            id: 2,
            name: "Jane Smith",
            location: "London, UK",
            review: "Such a amzing rifle i love it, I used it many times usually for hurting and its amazing.",
            profilePic: faUserCircle, 
            ratings:4
        }
    ]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [Location, setLocation] = useState("");
    const [Rating, setRating] = useState();

    const [paymentSuccessModalOpen, setPaymentSuccessModalOpen] = useState(false);

    const textChange = () => {
        setbuttontext(" Added");
        setTimeout(() => {
            setbuttontext(" Add to cart");
        }, 2000);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    const handleRatingChange = (e) => {
      setRating(e.target.value);
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== "" && Location.trim() !== "" && message.trim() !== "") {
            setReview([
                ...review,
                {
                    id: Date.now().toString(),
                    name: name,
                    location: Location,
                    review: message,
                    profilePic: faUserCircle ,
                    ratings:Rating
                }
            ]);
            setName("");
            setLocation("");
            setMessage("");
            setRating("")
        } else {
            setPaymentSuccessModalOpen(true);
            setTimeout(() => {
                setPaymentSuccessModalOpen(false);
            }, 1000);
        }
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true, // Vertical orientation
        verticalSwiping: true,
        arrows: false 
    };

    const stars = [];
    const fullStar = Math.floor(product.rating);
    const halfStar = product.rating % 1 !== 0;
    for (let i = 0; i < fullStar; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: "orange" }} />);
    }
    if (halfStar) {
        stars.push(<FontAwesomeIcon key={fullStar} icon={faStarHalfAlt} style={{ color: "orange" }} />);
    }
    const reviewstars = [];
    const fullStarriview = Math.floor(review.ratings);
    const halfStarstarriview = review.ratings % 1 !== 0;
    for (let i = 0; i < fullStarriview; i++) {
        reviewstars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: "orange" }} />);
    }
    if (halfStarstarriview) {
        reviewstars.push(<FontAwesomeIcon key={fullStar} icon={faStarHalfAlt} style={{ color: "orange" }} />);
    }

    const handleSliderClick = () => {
      //to make the silder clickable without clicking on arrow
        if (sliderRef.current) {
            sliderRef.current.slickNext(); 
        }
    };

    return (<>
        <div className='container d-flex flex-wrap my-5'>
            <div className="new-cardinfo d-flex align-items-stretch justify-content-center shadow">
                <div className="product-info">
                    <Card>
                        {product && product.imag && (
                            <Card.Img variant="top" src={product.imag} style={{ maxHeight: "310px" }} />
                        )}
                        <Card.Body>
                            {product && (
                                <>
                                    <Card.Title><h1>{product.title}</h1></Card.Title>
                                    <Card.Text>
                                        <h4>{product.desc}</h4>
                                        <br />
                                        <h3>{stars}</h3>
                                        <h3><strong>{product.price}$</strong></h3>
                                        <h6 className='text-success'>Available</h6>
                                    </Card.Text>
                                    <Button variant='dark' className="cart-button2" onClick={() => { addToCart(product); textChange(); }}>
                                        {buttontext === " Add to cart" ? <FontAwesomeIcon icon={faCartPlus} /> : <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />}
                                        {buttontext}
                                    </Button>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="reviews-section ml-5 flying-image text-dark p-3" style={{backgroundColor:"rgb(255, 219, 99)",maxWidth:"270px"}} onClick={handleSliderClick}>
                <h2 className="mb-3">Reviews</h2>
                <Slider {...settings} ref={sliderRef}>
                    {review.map(mapped => (
                        <div className="review" key={mapped.id}>
                            <FontAwesomeIcon icon={mapped.profilePic} className="reviewer-dp" />
                            <div className="reviewer-info">
                                <h4>{mapped.name}</h4>
                                <p>{mapped.location}</p>
                                <h6>{stars}</h6>
                            </div>
                            <p className="review-text">{mapped.review}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        <div className="my-5 container ">
            <h2>Leave a Review</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" value={Location} onChange={handleLocationChange} placeholder="Your location" />
                </Form.Group>
                <Form.Group controlId="formBasicReview">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" rows={3} value={message} onChange={handleMessageChange} placeholder="Write your review here" />
                </Form.Group>
                <Form.Group controlId="formBasicReview">
    <Form.Label>Rating</Form.Label>
    <Form.Control as="select" value={Rating} onChange={handleRatingChange}>
        <option value="">Select rating</option>
        <option value="1 ">1 star</option>
        <option value="2 ">2 stars</option>
        <option value="3 ">3 stars</option>
        <option value="4 ">4 stars</option>
        <option value="5 ">5 stars</option>
    </Form.Control>
</Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        <Errorpopup isOpen={paymentSuccessModalOpen} />
    </>
    );
};

export default ProductDetails;
