import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarraTitulo } from './components/BarraTitulo';
import { Footer } from './components/Footer';
import { Headerr } from './components/Headerr';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <BarraTitulo/>
        <Headerr />
        <div className="flex-grow-1 d-flex flex-column">
          <AppRoutes />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;