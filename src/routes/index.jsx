import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio } from '../pages/inicio';

import { Cards } from '../components/cards';
import { Main } from '../components/main';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/cursos" element={<Cards />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}