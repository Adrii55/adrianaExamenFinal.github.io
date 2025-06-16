import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

export function Headerr() {
  return (
    <Navbar color="light" light expand="md" className="mb-4">
      <Container>
        <Nav navbar>
          <NavItem>
            <Link to="/inicio" className="nav-link font-weight-bold text-black">
              Inicio
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/cursos" className="nav-link font-weight-bold text-black">
              Cursos
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}