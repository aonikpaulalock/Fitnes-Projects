import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../Styles/Header.css"
const Header = () => {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav-heading text-white">
          Everest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="nav-anchor" to="/">Home</NavLink>
            <NavLink className="nav-anchor" to="/aboutpage">About</NavLink>
            <NavLink className="nav-anchor" to="/servicePages">Services</NavLink>
            <NavLink className="nav-anchor" to="/blogs">Blogs</NavLink>
            <NavLink className="nav-anchor" to="/contactPage">Contact</NavLink>
          </Nav>
          <div>
            <button className="share-button" onClick={() => navigate("/contactPage")}>Book Class</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;