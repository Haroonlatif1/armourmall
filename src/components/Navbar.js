import React, { useState,useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch, faCartPlus,faUser} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Context, { contextz } from "./context";
import "./homenav.css"
const NavbarComponent = () => {
  const bb=useContext(contextz)
  const {totalamm}=bb;
  const {yomo}=bb
  const {logintext}=bb
    const [search, setSearch] = useState("");
const fun=()=>{
  yomo(search)
}

  return (
     <> <Context  search={search} setSearch={setSearch}/>

    <Navbar expand="xl" className="smm" style={{'background-color':"#f1f1f1","font-size":"17px", 'font-family': 'Montserrat, sans-serif'}} >
      <Container fluid>
        <Link style={{ color: "black", textDecoration: "none", fontSize: "20px" }} to="/">
          <img src="/ak.png" alt="Logo" style={{ height: "40px", width: "40px" }} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" /> 
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-sm-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link>
              <Link onMouseEnter={(e) => e.target.style.color = 'black'} 
              onMouseLeave={(e) => e.target.style.color = 'gray'} style={{  color: "gray",textDecoration: "none",marginRight:"10px" }} to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link onMouseEnter={(e) => e.target.style.color = 'black'} 
              onMouseLeave={(e) => e.target.style.color = 'gray'} style={{ color: "gray", textDecoration: "none",marginRight:"10px" }} to="/inputform">Add product</Link>
            </Nav.Link>
            <Nav.Link >
              <Link onMouseEnter={(e) => e.target.style.color = 'black'} 
              onMouseLeave={(e) => e.target.style.color = 'gray'} style={{ color: "gray", textDecoration: "none" ,marginRight:"10px" }} to="/aboutus">About us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link onMouseEnter={(e) => e.target.style.color = 'black'} 
              onMouseLeave={(e) => e.target.style.color = 'gray'} style={{ color: "gray", textDecoration: "none",marginRight:"10px" }} to="/contactus">Contact us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link onMouseEnter={(e) => e.target.style.color = 'black'} 
             onMouseLeave={(e) => e.target.style.color = 'gray'} style={{ color: "gray", textDecoration: "none",marginRight:"10px" }} to="/services">Our services</Link>
            </Nav.Link>
            <NavDropdown  title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item id="dropitems"  >
                <Link style={{ textDecoration: "none", color: "white" }} to="/antiques">Antiques</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="drop2">
                <Link style={{ textDecoration: "none", color: "gray" }} to="/shotguns">Shotguns</Link>
              </NavDropdown.Item>
              <NavDropdown.Item  className="drop2">
                <Link style={{ textDecoration: "none", color: "gray" }} to="/rifles">Rifles</Link>
              </NavDropdown.Item>
              <NavDropdown.Item  className="drop2">
                <Link style={{ textDecoration: "none", color: "gray" }} to="/handguns">Handguns</Link>
              </NavDropdown.Item>
              <NavDropdown.Item  className="drop2">
                <Link style={{ textDecoration: "none", color: "gray" }} to="/snipers">Snipers</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="drop2">
                <Link style={{ textDecoration: "none", color: "gray" }} to="/newarrival">New arrival</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link style={{ color: "white", textDecoration: "none" }} to="/addtocart">
                <div style={{ position: "relative" }}>
                  <FontAwesomeIcon icon={faShoppingCart} style={{"color":"brown"}}/>
                  <span style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    backgroundColor: "#C70039",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    textAlign: "center",
                    lineHeight: "17px",
                    fontSize:"15px",
                    fontFamily:"sans-serif"
                  }}>
                    {<>{totalamm}</>}
                  </span>
                </div>
              </Link>
            </Nav.Link>
          
          </Nav>
          <Nav.Link style={{marginRight:"10px"}}><Link to="/login"><Button  type="button"  variant="outline-primary">{logintext}  </Button></Link></Nav.Link>
          <Link to="/search">
            <Form className="d-flex">
              <Form.Control
                style={{ textDecoration: "none", color: "gray" }}
                type="text"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="button" variant="outline-success" onClick={fun} id="buttonsub">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  );
};

export default NavbarComponent;
