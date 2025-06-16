import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio } from '../pages/inicio';
import { Cursos } from '../pages/cursos';
import { Contenido } from '../components/contenido';
import { Cards } from '../components/cards';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/cursos" element={<Cards />} />
      <Route path="/" element={<Contenido />} />
    </Routes>
  );
}