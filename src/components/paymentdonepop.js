import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PaymentSuccessModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true} >
      <ModalHeader className="bg-dark text-white" style={{ border: 'none' }}>
        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Payment Successful
      </ModalHeader>
      <ModalBody className="text-white" style={{ backgroundColor: 'rgb(7, 128, 7)', borderTop: 'none' }}>
        <div className="text-center">
          <p>Your payment has been successfully processed. You will receive a confirmation email soon </p>
        </div>
      </ModalBody>
      <ModalFooter style
      ={{ backgroundColor: 'rgb(7, 128, 7)',border:"none" }}>
        <Button color="dark" onClick={toggle}>Okay</Button>
      </ModalFooter>
    </Modal>
  );
};

export default PaymentSuccessModal;
