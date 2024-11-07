// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';  
import Info from './screens/Info'; 
import Iniciosesion from  './screens/Iniciosesion';
import TicketInfo from './screens/TicketInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/info" element={<Info />} /> 
        <Route path="/Iniciar Sesion" element={<Iniciosesion/>} />
        <Route path="/ticket/:id" element={<TicketInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
