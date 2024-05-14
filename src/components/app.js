import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import your context providers
import ContextProvider from "./context";

// Import your components
import Navbar from "./Navbar";
import Footer from "./footer";
import Protect from "./protect";
import Aboutus from "./aboutus";
import Contactus from "./contactus";
import Cards from "./cards";
import Search from "./search";
import Inputform from "./inputform";
import Login from "./Login";
import ProductDetails from "./ProductDetails"
// Import your category components
import Newarrival from "./Categories/Newarrival";
import Rifles from "./Categories/Rifles";
import Handguns from "./Categories/Handguns";
import Shotguns from "./Categories/Shotguns";
import Antiques from "./Categories/Antiques";
import Snipers from "./Categories/Snipers";

// Import the Cartcontext component
import Cartcontext from "./cartcontext";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route exact path="/addtocart" element={<Cartcontext />} />
          <Route path="/login" element={<Login/>} /> 
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/services" element={<Protect />} />
          <Route exact path="/antiques" element={<Antiques />} />
          <Route exact path="/handguns" element={<Handguns />} />
          <Route exact path="/shotguns" element={<Shotguns />} />
          <Route exact path="/newarrival" element={<Newarrival />} />
          <Route exact path="/rifles" element={<Rifles />} />
          <Route exact path="/snipers" element={<Snipers />} />
          <Route exact path="/inputform" element={<Inputform />} />
          <Route exact  path="/product/:productId"element={<ProductDetails />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </Router>
  );
};

export default App;
