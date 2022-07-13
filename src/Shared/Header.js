import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Styles/Header.css"
const Header = () => {
  return (
    <Navbar expand="lg" className="nav-bg sticky-top">
      <Container>
        <Navbar.Brand href="#" className="nav-heading text-white">
          Everest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={Link} className="nav-anchor">Home</Nav.Link>
            <Nav.Link to="/aboutpage" as={Link} className="nav-anchor">About</Nav.Link>
            <Nav.Link to="/servicePages" as={Link} className="nav-anchor">Services</Nav.Link>
            <Nav.Link to="/blogs" as={Link} className="nav-anchor">Blogs</Nav.Link>
            <Nav.Link to="#" as={Link} className="nav-anchor">Contact</Nav.Link>
          </Nav>
          <div>
            <button className="share-button">Book Class</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;