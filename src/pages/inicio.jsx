import React from 'react';
import { Container } from 'reactstrap';
import { Danzas } from '../components/Danzas';

export function Inicio() {
  return (
    <Container fluid className="flex-grow-1 d-flex flex-column justify-content-center">
      <div className="my-auto py-4"> {/* Centra el contenido verticalmente */}
        <Danzas/>
      </div>
    </Container>
  );
}