import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokeDetails from './pages/PokeDetails';
import { GlobalStyle } from './Styles/Global.styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokeDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
