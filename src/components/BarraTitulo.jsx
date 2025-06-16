import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function BarraTitulo() {
  return (
    <div className="bg-success text-white py-5 mb-0">
      <Container>
        <h1 className="display-4">Academia: "WATMAN"</h1>
        <p>
          Nombre: Adriana Wara Campos Ortiz
        </p>
      </Container>
    </div>
  );
}