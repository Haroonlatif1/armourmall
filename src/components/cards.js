import React, {useContext } from "react";
import Cardmap from "./cardsmap";
import Sliderhome from "./sliderhome";
import Parallelogram from "./paralleogram";
import Homeimg1 from "./homeimg1";
import Snipers from "./Categories/Snipers";
import Handguns from "./Categories/Handguns";
import Rifles from "./Categories/Rifles";
import Shotguns from "./Categories/Shotguns";
import Antiques from "./Categories/Antiques";
import  { contextz } from "./context";
import Firstani from "./animation/firstani"
import Movetotop from "./movetotop"
import Movetotop2 from "./movetotop2"
import { Pagination } from "./Pagination";


const Cards = () => {
  const bb=useContext(contextz)
  const {PaginatedProducts}=bb
  return (
    <div>
      <Sliderhome />
      <Parallelogram />
      <Cardmap a1={PaginatedProducts} />
      <Homeimg1 />
      <Snipers />
      <Handguns />
      <div className="container mb-4" > <div style={{"max-width":"100%","margin-top":"10px","background-color":"#f9f9f9"}}> <Firstani/></div></div>
      <Rifles />
      <Shotguns />
      <Antiques />
      <Movetotop/>
      <Movetotop2/>
      <Pagination/>
    </div>
  );
};

export default Cards;
