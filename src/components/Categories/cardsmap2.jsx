import React from 'react';
import NewCard2 from ".//new2";
import { Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { contextz } from '../context';
import { Card, Button } from 'react-bootstrap';

const CardsMap = (props) => {
  const bb=useContext(contextz)
  const {xyz}=bb
  const {xyz2}=bb

  return (<>
  {( <div className='container my-5'>
      <Row xs={1} md={2} lg={4} className='g-4'>
        {props.p.map((mappedData, index) => (
          <Col key={index}>
            <NewCard2 p1={mappedData}  />
          </Col>
        ))}
      </Row>
    </div>)}
   </>
  );
};

export default CardsMap;
