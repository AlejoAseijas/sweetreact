import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import cartIcon from "../img/cartIcon.png";
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/"> Sweet Style </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/category/remeras"> Remeras </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/category/pantalones"> Pantalones </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/category/buzos"> Buzos </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cart">
                <img src={cartIcon} alt="cartLogo" />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
