import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Footer() {
  return (
    <footer className="text-white py-4 mt-4" style={{ backgroundColor: '#4CAF50' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Academia "WATMAN"</h5>
          </Col>
          <Col md={4}>
          </Col>
          <Col md={4}>
            <h5>PROGRAMACION WEB 2</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}