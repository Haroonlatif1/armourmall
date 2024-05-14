import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./homepic.css"
import { contextz } from "./context";
const Products = (props) => {
  const b = useContext(contextz);

  return (
    <div className="d-flex justify-content-between align-items-center">
      {/* {console.log(props.ll)} */}
      <div className=" trans d-flex align-items-center flex-wrap">
        <div className="mb-3"style={{"margin-right":"5px"}}>
          <Card.Img
            src={props.ll.imag}
            style={{ maxHeight: "150px", maxWidth: "150px" }}
          />
        </div>
        <div className="mb-3">
          <h3>{props.ll.title}</h3>
          <p>
            <b>{props.ll.price}$</b>
          </p>
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex align-items-center mb-2">
              <button style={{"margin-right":"5px"}}
                className="btn btn-danger btn-md mr-2"
                onClick={() => b.onClicked(props.ll.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <button
                className="btn btn-dark btn-md mr-2"
                style={{ "margin-right": "5px" }}
                onClick={() => b.increment(props.ll.id)}
              >
                +1
              </button>
              <button
                className="btn btn-dark btn-md mr-2"
                style={{ "margin-right": "5px" }}
                onClick={() => b.decrement(props.ll.id)}
              >
                -1
              </button>
            </div>
            <div className="d-flex align-items-center">
              <span className="mr-2" style={{ "margin-right": "5px" }}>
                Amount
              </span>
              <h4 className="border p-2 mb-0">{props.ll.quantity}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
