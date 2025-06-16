import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Iniciodanzas } from '../pages/Iniciodanzas.jsx';
import { Cards } from '../components/Cards.jsx';
import { Bodymain } from '../components/Bodymain.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/inicio" element={<Iniciodanzas />} />
      <Route path="/cursos" element={<Cards />} />
      <Route path="/" element={<Bodymain />} />
    </Routes>
  );
}