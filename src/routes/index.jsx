import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio } from '../pages/Inicio';

import { Cards } from '../components/Cards';
import { Bodymain } from '../components/Bodymain';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/cursos" element={<Cards />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}