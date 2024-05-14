import React,{useContext,useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../newcard.css';
import { contextz } from '../context';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NewCard = (props) => {

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
const fullstar=Math.floor(props.p1.rating)
const halfstar=props.p1.rating%1!==0
for (let i =0;i<fullstar;i++)
{
  stars.push(<FontAwesomeIcon icon={faStar} style={{"color":"orange"}} />)
 
}
if(halfstar)
{
  stars.push(<FontAwesomeIcon icon={faStarHalfAlt} style={{"color":"orange"}} />)
}

  return (
    <div className="new-card trans2 d-flex align-items-stretch shadow">
      {/* {console.log(addToCart)}
      {console.log(props.p1)} */}
      <Card className="w-100">
        {props.p1 && props.p1.imag && (
          <Card.Img variant="top" src={props.p1.imag} style={{ maxHeight: "110px" }} />
        )}
        <Card.Body>
          {props.p1 && (
            <>
              <Card.Title>{props.p1.title}</Card.Title>
              <Card.Text>
                {props.p1.desc}
                <br />
                {stars}
                <br/>
                <strong>{props.p1.price}$</strong>
              </Card.Text>
              <Button variant='dark' className="cart-button" onClick={() => { addToCart(props.p1); textchng(); }}>
  {buttontext === " Add to cart" ? <FontAwesomeIcon icon={faCartPlus} /> : <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />}
   { buttontext}
</Button>


            </>
          )}
<Link to={{ pathname: `/product/${encodeURIComponent(JSON.stringify(props.p1))}` }}><Button className="details-button"
          
          ><FontAwesomeIcon icon={faInfoCircle}/> Info</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewCard;
