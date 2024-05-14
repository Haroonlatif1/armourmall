import React from "react";
import NewCard from "./newcard";
import { Row, Col } from "react-bootstrap";

const CardsMap = (props) => {
  return (<>
  {
  ( <div className='container my-5'>
      <Row xs={1} md={2} lg={4} className='g-4'>
        {props.a1.map((mappedData, index) => (
          <Col key={index}>
            <NewCard a2={mappedData}  />
          </Col>
        ))}
      </Row>
    </div>)}</>
  );
};

export default CardsMap;
