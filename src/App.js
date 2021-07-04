import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Button, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

import LogoApp from "./images/logoApp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand as={Link} className="nav-link" to="/">
            <LogoApp />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ marginRight: ".8rem" }}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item as={Link} className="nav-link" to="/">
                Início
              </Nav.Item>
              <Nav.Item as={Link} className="nav-link" to="/ocorrencias">
                Ocorrências
              </Nav.Item>
              <Nav.Item
                as={Link}
                className="nav-link"
                to="/ocorrencias_cadastro"
              >
                Cadastrar
              </Nav.Item>
              <Nav.Item as={Link} className="nav-link" to="/dashboard">
                Dashboard
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </BrowserRouter>
    </>
  );
}
