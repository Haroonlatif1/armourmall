import React, { useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Loginpop from './loginpop';
import Logoutpop from "./logoutpop"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './login.css';
import { contextz } from './context';

const Login = () => {
  const bb = useContext(contextz);
  const { setlogintext, logintext } = bb; //login button text

  const [paymentSuccessModalOpen, setPaymentSuccessModalOpen] = useState(false); //login popup control
  const [paymentSuccessModalOpen2, setPaymentSuccessModalOpen2] = useState(false); //logout popup control

//login handler
  const paymentdone = () => {
    setPaymentSuccessModalOpen(true);

    setTimeout(() => {
      setPaymentSuccessModalOpen(false);
      setlogintext('User10');

    }, 2000);
  };
//logout handler
  const logouthandler = () => {
    setPaymentSuccessModalOpen2(true);
    setTimeout(() => {
        setlogintext('LOG IN');
      setPaymentSuccessModalOpen2(false);
    }, 1000);
  };

  return (
    <>
      {logintext === 'LOG IN' ? (
        <div className='body' style={{ height: '100vh' }}>
          <h2 className='text-center text-light mb-3 fs-1 flying-image'>Login to our website</h2>
          <div className='container lo form-control flying-image'>
            <Form className='zo'>
              <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
                <Form.Label column sm='2'>
                  Email
                </Form.Label>
                <Col sm='6'>
                  <Form.Control type='email' placeholder='example@example.com' />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
                <Form.Label column sm='2'>
                  Password
                </Form.Label>
                <Col sm='6'>
                  <Form.Control type='password' placeholder='Password' />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
                <Form.Label column sm='2'>
                  Age
                </Form.Label>
                <Col sm='3'>
                  <Form.Control type='number' placeholder='Age' />
                </Col>
              </Form.Group>
              <Button onClick={paymentdone} variant='outline-light'>
                Log in
              </Button>
            </Form>
          </div>
          <Loginpop isOpen={paymentSuccessModalOpen} /> 
        </div>
      ) : (
        <>
          <div className='mt-3' style={{ marginBottom: '42px' }}>
            <h2 className='text-center text-secondary' style={{ fontSize: '50px',fontFamily:'Montserrat, sans-serif' }}>
              User10 logged in
            </h2>
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '200px' }} />
          </div>
          <div className='d-flex justify-content-center mt-3 mb-4'>
            <Button onClick={logouthandler} className='btn btn-warning'>
              Log out
            </Button>
          </div>
          <Logoutpop isOpen={paymentSuccessModalOpen2}/>
        </>
      )}
    </>
  );
};

export default Login;
