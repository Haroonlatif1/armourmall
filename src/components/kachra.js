import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homenav.css";
import Footer from "./footer";
import Protect from "./protect";
import Homeimg1 from "./homeimg1";
import Aboutus from "./aboutus";
import Contactus from "./contactus";
import Sliderhome from "./sliderhome";
import Parallelogram from "./paralleogram";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cardmap from "./cardsmap";
import { createContext } from "react";
import { useReducer, useEffect, useContext } from "react";
import Cartcontext from "./cartcontext";
import { reducer } from "./reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {ContextzProvider} from "./cartcontext"
import Newarrival from "./Categories/Newarrival";
import Rifles from "./Categories/Rifles";
import Handguns from "./Categories/Handguns";
import Shotguns from "./Categories/Shotguns";
import Antiques from "./Categories/Antiques";
import Snipers from "./Categories/Snipers";
import NewCard from "./newcard";
// import { context1 } from "./Categories/Shotguns";
// export const context = createContext();
// export const context2 = createContext();
const Cards = () => {

  const [newarrival, setnewarrival] = useState([
    {
      id: "1",
      imag: "/ak.png",
      price: 220,
      title: "Ak47",
      desc: " AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ",
      quantity: 1,
    },
    {
      id: 2,
      imag: "/mk107.png",
      title: "MK-107",
      price: 560,
      desc: "provide operators with a reliable and effective tool in various scenarios. ",
      quantity: 1,
    },
    {
      id: 3,
      imag: "/mk107.png",
      title: "MK-107",
      price: 560,
      desc: "provide operators with a reliable and effective tool in various scenarios. ",
      quantity: 1,
    },
    {
      id: 4,
      imag: "/mk107.png",
      title: "MK-107",
      price: 560,
      desc: "provide operators with a reliable and effective tool in various scenarios. ",
      quantity: 1,
    },
    {
      id: 5,
      imag: "/mk107.png",
      title: "MK-107",
      price: 560,
      desc: "provide operators with a reliable and effective tool in various scenarios. ",
      quantity: 1,
    },
    {
      id: 6,
      imag: "/beretta.png",
      price: 150,
      title: "Beretta M9",
      desc: " Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use",
      quantity: 1,
    },
    {
      id: "1",
      imag: "/sniperravinR29X.png",
      price: 6000,
      title: "A1-HS",
      desc: " AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ",
      quantity: 1,
    },
    {
      id: "2",
      imag: "/sniper3.png",
      title: "BON-990",
      price: 2050,
      desc: "provide operators with a reliable and effective tool in various scenarios. ",
      quantity: 1,
    },
    {
        id: "4",
        imag: "/sniperrifle1.png",
        title: "100x Copp",
        price: 2050,
        desc: "provide operators with a reliable and effective tool in various scenarios. ",
        quantity: 1,
      },
    {
      id: "3",
      imag: "/sniperrifle1.png",
      price: 4000,
      title: "100x Copp Z",
      desc: " Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use",
      quantity: 1,
    },{
      id: "1",
      imag: "/shotgun2.png",
      price: 220,
      title: "Shotgun 1",
      desc: " AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ",
      quantity: 1,
    },
    {
      id: "2",
      imag: "/shotgun2.png",
      price: 220,
      title: "Shotgun 2",
      desc: " AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ",
      quantity: 1,
    },
    {
      id: "3",
      imag: "/shotgun2.png",
      price: 220,
      title: "Shotgun 3",
      desc: " AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ",
      quantity: 1,
    },
    {
      id: "4",
      imag: "/shotgun2.png",
      price: 220,
      title: "Shotgun 4",
      desc: " AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ",
      quantity: 1,
    },
    {
      id: "5",
      imag: "/shotgun3.png",
      title: "RA-777",
      price: 560,
      desc: "provide operators with a reliable and effective tool in various scenarios. ",
      quantity: 1,
    },
    {
      id: "6",
      imag: "/shotgun4.png",
      price: 150,
      title: "Brust-11",
      desc: " Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use",
      quantity: 1,
    },{ id: "1","imag":'/rifle3.png',price:220, title: 'MK-107', desc: ' AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ',quantity:1 },
    { id: "1","imag":'/rifle3.png',price:220, title: 'MK-107', desc: ' AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ',quantity:1 },
    { id: "1","imag":'/rifle3.png',price:220, title: 'Mk-107', desc: ' AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ',quantity:1 },
    { id: "2",'imag':'/rifle2.png', title: 'Thunder-2',price:560, desc: 'provide operators with a reliable and effective tool in various scenarios. ',quantity:1 },
    { id: "3",'imag':'/ak.png',price:150, title: 'Ak-47', desc: ' Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use',quantity:1 },
    { id: "1","imag":'/beretta.png',price:220, title: 'Beretta M9', desc: ' AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ',quantity:1 },
    { id: "1","imag":'/beretta.png',price:220, title: 'Beretta M9', desc: ' AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ',quantity:1 },
    { id: "2",'imag':'/handgun2.png', title: 'Special 9mm',price:560, desc: 'provide operators with a reliable and effective tool in various scenarios. ',quantity:1 },
    { id: "3",'imag':'/handgun1.png',price:150, title: '30KL', desc: ' Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use',quantity:1 }, { id: "1","imag":'/antique1.png',price:220, title: 'Special 9mm', desc: ' AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.  ',quantity:1 },
    { id: "2",'imag':'/antique2.png', title: 'Gold Pistol h6',price:560, desc: 'provide operators with a reliable and effective tool in various scenarios. ',quantity:1 },
    { id: "3",'imag':'/antique3.png',price:150, title: 'GK-99', desc: ' Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use',quantity:1 }

  ]);
  // const newShotgun = useContext(context1);
  const [search, setsearch] = useState("");
  const [noitemmes, setnoitemmes] = useState("No product found");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const  newarrival2=0;




  const searchProducts = () => {
    
    const searchTerm = search;
    const filtered = newarrival.filter((product) => {
      if (
        searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts(filtered);
  };
  const handler = (e) => {
    e.preventDefault();
    searchProducts();
    setsearch("");
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setprice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setnewarrival([
      ...newarrival,
      {
        id: Date.now().toString(),
        title: title,
        desc: description,
        price: price,
      },
    ]);
    setTitle("");
    setDescription("");
    setprice("");
  };

  return (
    <div>
      {/* {console.log("hello: ",newShotgun)} */}
      {/* {alert("This web design and some functionalities are under-development")} */}
      <Router>
      <ContextzProvider>

        <div>
          <Navbar
            expand="md"
            style={{ "background-color": "rgb(149, 69, 53)" }}
          >
            <Container fluid>
              <Link
                style={{
                  color: "white",
                  "text-decoration": "none",
                  "font-size": "20px",
                }}
                to="/"
              >
                <img
                  src="/ak.png"
                  alt="Logo"
                  style={{ height: "40px", width: "40px" }}
                />
              </Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-sm-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link>
                    <Link
                      style={{ color: "white", "text-decoration": "none" }}
                      to="/"
                    >
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      style={{ color: "white", "text-decoration": "none" }}
                      to="/inputform"
                    >
                      Add product
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link
                      style={{ color: "white", "text-decoration": "none" }}
                      to="/aboutus"
                    >
                      About us
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      style={{ color: "white", "text-decoration": "none" }}
                      to="/contactus"
                    >
                      Contact us
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      style={{ color: "white", "text-decoration": "none" }}
                      to="/services"
                    >
                      Our services
                    </Link>
                  </Nav.Link>
                  <NavDropdown title="Categories" id="navbarScrollingDropdown">
                    <NavDropdown.Item id="dropitems">
                      <Link
                        style={{ "text-decoration": "none", color: "white" }}
                        to="/antiques"
                      >
                        Antiques
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ "background-color": "rgb(229, 223, 223)" }}
                    >
                      <Link
                        style={{ "text-decoration": "none", color: "gray" }}
                        to="/shotguns"
                      >
                        shot guns
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ "background-color": "rgb(229, 223, 223)" }}
                    >
                      <Link
                        style={{ "text-decoration": "none", color: "gray" }}
                        to="/rifles"
                      >
                        Rifles
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ "background-color": "rgb(229, 223, 223)" }}
                    >
                      <Link
                        style={{ "text-decoration": "none", color: "gray" }}
                        to="/handguns"
                      >
                        hand guns
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ "background-color": "rgb(229, 223, 223)" }}
                    >
                      <Link
                        style={{ "text-decoration": "none", color: "gray" }}
                        to="/snipers"
                      >
                        Snipers
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ "background-color": "rgb(229, 223, 223)" }}
                    >
                      <Link
                        style={{ "text-decoration": "none", color: "gray" }}
                        to="/newarrival"
                      >
                        New arrival
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <Link
                      style={{ color: "white", "text-decoration": "none" }}
                      to="/addtocart"
                    >
                      {" "}
                      <div style={{ position: "relative" }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span
                          style={{
                            position: "absolute",
                            top: "-8px", // Adjust the top position as needed
                            right: "-8px", // Adjust the right position as needed
                            backgroundColor: "#C70039",
                            color: "white",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                            textAlign: "center",
                            lineHeight: "17px",
                          }}
                        >
                          {/* {totalamm} */}
                        </span>
                      </div>
                    </Link>
                  </Nav.Link>
                </Nav>
                <Link to="/search">
                  <Form className="d-flex">
                    <Form.Control
                      style={{ "text-decoration": "none", color: "gray" }}
                      type="text"
                      placeholder="Search"
                      className="me-1"
                      aria-label="Search"
                      value={search}
                      onChange={(e) => setsearch(e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="outline-success"
                      onClick={handler}
                      id="buttonsub"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </Form>
                </Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Sliderhome />
                <Parallelogram/>
                <Cardmap a1={newarrival} />
                <Homeimg1 />
                <Snipers/>
                <Handguns />
                <Rifles />
                <Shotguns />
                <Antiques />
              </div>
            }
          />
          <Route
            path="/addtocart"
            element={
                <Cartcontext />
              
            }
          />
          <Route
            path="/inputform"
            element={
              <div className="container p-3">
                <Card>
                  <Form className="form-control" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Product title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Product title"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Product Price</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Product Price"
                        name="Price"
                        value={price}
                        onChange={handlePriceChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Description"
                        name="desc"
                        value={description}
                        onChange={handleDescriptionChange}
                      />
                    </Form.Group>
                    <Button variant="success" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card>
              </div>
            }
          />
          <Route
            path="/search"
            element={
              <div className="search-results-container">
  {/* Search results content */}
  {filteredProducts.length !== 0 ? (
    filteredProducts.map((product) => (
      <Card
        key={product.id}
        className="product-card"
      >
        <Card.Img
          variant="top"
          src={product.imag}
          className="product-image"
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            <b>{product.price}$</b>
          </Card.Text>
          <br />
          <Button variant='dark' className="cart-button">
            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
          </Button>
          <Button className="details-button">Details</Button>
        </Card.Body>
      </Card>
    ))
  ) : (
    <>
      <h2 className="no-results-message">{noitemmes}</h2>
    </>
  )}
</div>

            }
          />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/services" element={<Protect />} />
          <Route exact path="/antiques" element={<Antiques />} />
          <Route exact path="/handguns" element={<Handguns />} />
          <Route exact path="/shotguns" element={<Shotguns />} />
          <Route exact path="/newarrival" element={<Newarrival />} />
          <Route exact path="/rifles" element={<Rifles />} />
          <Route exact path="/snipers" element={<Snipers/>} />
        </Routes>
        <Footer />
    
        </ContextzProvider>
    </Router>
      


    </div>
  );
};
export default Cards;
const [CurrentPage, setCurrentPage] = useState(1)
import React, { useContext,useState } from 'react'
import { contextz } from './context';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './newcard.css';
import { Link } from 'react-router-dom';
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const ProductDetails = () => {
  const { productId } = useParams();
  const  b = useContext(contextz);
  const {addToCart}=b
  const [buttontext, setbuttontext]=useState(" Add to cart")
  const textchng=()=>{
    setbuttontext(" Added")
    setTimeout(() => {
      setbuttontext(" Add to cart")
    }, 2000);
  }
  
  const stars=[]
  const fullstar=Math.floor(productId.rating)
  const halfstar=productId.rating%1!==0
  for (let i =0;i<fullstar;i++)
  {
    stars.push(<FontAwesomeIcon icon={faStar} style={{"color":"orange"}} />)
   
  }
  if(halfstar)
  {
    stars.push(<FontAwesomeIcon icon={faStarHalfAlt} style={{"color":"orange"}} />)
  }
  
  return (
<div className='container my-5'>
  {console.log(productId)}
  <h1>tatata</h1>
  <div className="new-card trans2 d-flex align-items-stretch shadow">

<Card className="w-100">
  {productId && productId.imag && (
    <Card.Img variant="top" src={productId.imag} style={{ maxHeight: "110px" }} />
  )}
  <Card.Body>
    {productId && (
      <>
        <Card.Title>{productId.title}</Card.Title>
        <Card.Text>
          {productId.desc}
          <br />
          {stars}
          <br/>
          <strong>{productId.price}$</strong>
        </Card.Text>
        <Button variant='dark' className="cart-button" onClick={() => { addToCart(productId); textchng(); }}>
{buttontext === " Add to cart" ? <FontAwesomeIcon icon={faCartPlus} /> : <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />}
{ buttontext}
</Button>


      </>
    )}<Link to={`/product/${productId.id}`}><Button className="details-button"
    
    ><FontAwesomeIcon icon={faInfoCircle}/> Info</Button></Link>
    
  </Card.Body>
</Card>
</div>
    </div>  )
}

export default ProductDetails

