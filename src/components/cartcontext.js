import React, { useState, useContext } from 'react';
import Items from './cartitems';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Paymentdonepop from "./paymentdonepop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

import { contextz } from './context';

 export const ContextzProvider = (props) => {
  const  b = useContext(contextz);

  const {item}=b
  const {totalamm}=b
  const {totalammm}=b

  const [buystate, setBuystate] = useState(false);
  const [paymentSuccessModalOpen, setPaymentSuccessModalOpen] = useState(false);
  const [cardnumber, setcardnumber] = useState("");
  const [carddate, setcarddate] = useState("");
  const [cardcvv, setcardcvv] = useState("");
  const [cardname, setcardname] = useState("");

  const buyIt = () => {
    setBuystate(true);
  };

  const backbutton = () => {
    setBuystate(false);
  };

  const cardnumchange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setcardnumber(value);
  };

  const carddatechange = (e) => {
    setcarddate(e.target.value);
  };

  const cardcvvchange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    setcardcvv(value);
  };

  const cardnamechange = (e) => {
    setcardname(e.target.value);
  };

  const paymentdone = () => {
    if (cardnumber.length !== 0 && carddate.length !== 0 && cardcvv.length !== 0 && cardname.length !== 0) {
      setTimeout(() => {
        setPaymentSuccessModalOpen(true);
      }, 500);
    } else {
      alert("Invalid input");
    }
  };
  const [delbuttoncon, setdelbuttoncon] = useState(true)
  const ld=()=>{
    setdelbuttoncon(false)
  }

  const togglePaymentSuccessModal = () => {
    setPaymentSuccessModalOpen(!paymentSuccessModalOpen);
  };



  return (<>
{console.log(item)}
      {buystate ? (
        <Container className='p-3  '>
          <button className='btn btn-light' onClick={backbutton}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
          <Row >
            <Col className='border shadow bg-dark text-white p-3' xs={12} sm={{ size: 6, offset: 3 }}>
              <h2>Credit Card Details</h2>
              <p >Total amount: {totalammm}$<span style={{"color":"red"}}>     No discount yet</span></p>

              <p>(Currently only this mode of payment available)</p>
              <Form>
                <FormGroup>
                  <Label for="cardNumber">Card Number</Label>
                  <Input type="text" maxlength="19"
                    placeholder="XXXX XXXX XXXX XXXX" value={cardnumber} onChange={cardnumchange} name="cardNumber" id="cardNumber" />
                </FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="expiryDate">Expiry Date</Label>
                      <Input type="date" name="expiryDate" value={carddate} onChange={carddatechange} id="expiryDate" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="cvv">CVV</Label>
                      <Input type="number" name="cvv" maxLength="4" value={cardcvv} onChange={cardcvvchange} id="cvv" placeholder="CVV" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="cardName">Name on Card</Label>
                  <Input type="text" name="cardName" value={cardname} onChange={cardnamechange} id="cardName" placeholder="Enter name on card" />
                </FormGroup>
                <Button color="warning" onClick={paymentdone}>Buy now</Button>
              </Form>
            </Col>
          </Row>
          <Paymentdonepop isOpen={paymentSuccessModalOpen} toggle={togglePaymentSuccessModal} />
        </Container>
      ) : (
        <div className="container">
          <h1 className="text-center mb-4">Total items: {totalamm}</h1>
          <div className="row p-4">
            {item.length > 0 ? (
              item.map((citem) => (
                <div key={citem.id} className="col-12 col-md-6 mb-4">
                  <div className="border p-4 shadow">
                    <Items ll={citem} />
                  </div>
                </div>
              ))
            ) : (
              <>
                <h3 className="text-center">Your cart is empty</h3>
                <a className="text-decoration-none text-dark text-center" href='/' style={{marginBottom:"150px"}}>Products</a>
              </>
            )}
          </div>
          <div>
            <h2 className="text-center mb-4">Total Amount: {totalammm}$</h2>
          </div>
          {delbuttoncon && (<div className="text-center mt-4 mb-3">
            <button className="btn btn-danger" onClick={() => {b.onClicked2(); ld();}}>Delete All <FontAwesomeIcon icon={faTimes} /> </button>
            <button className="btn btn-primary m-2" onClick={buyIt}>Checkout <FontAwesomeIcon icon={faMoneyBillWave} />
</button>
          </div>)}
          
        </div>
      )}</>
  );
};

export default ContextzProvider
// export const useCart = () => useContext(contextz);