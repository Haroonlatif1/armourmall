import React, { useContext,useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { contextz } from "./context";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from "react-bootstrap";
import NewCard from './Categories/new2';


const ProductList = () => {
  const bb= useContext(contextz);
  const {filteredProducts}=bb
const [message, setmessage] = useState("Not found")
  return (
    <div className='container my-3 '>
      <div className='mb-5 text-success'> <h1>Your search results:</h1></div>
     
    <Row xs={1} md={2} lg={4} className="g-4">
      {filteredProducts.length !== 0 ? (
        filteredProducts.map((product) => (
          
          <Col key={product.id}>
            <NewCard p1={product}/>
          </Col>
        ))
      ) : (<div className='text-danger text-center' style={{"font-size":"40px","margin-bottom":"40vh"}}>
        <p >{Object.values(message) }</p></div>
        
      )}
    </Row>
  </div>
  );
};

export default ProductList;
