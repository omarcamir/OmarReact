import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  const [scrolling, setScrolling] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      }
      else {
        setScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    {
      path: "about",
      name: "About",
    },
    {
      path: "portfolio",
      name: "Portfolio",
    },
    {
      path: "contact",
      name: "Contact",
    },
  ];
  return (
    <Navbar
    expand="lg"
    className={`${styles.navbar} sticky-top text-uppercase ${
      scrolling ? styles.scrolling : ""
    }`}
    >
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className={`nav-link fs-2 fw-bold link-light ${styles.logo}`}>
            Omar
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((navLink, index) => (
              <NavLink
                key={index}
                to={`/${navLink.path}`}
                className={(x) =>
                  x.isActive
                    ? `nav-link link-light rounded-3 ${styles.activeLink} ${styles.navLink}`
                    : `nav-link link-light rounded-3 ${styles.navLink}`
                }
              >
                {navLink.name}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
