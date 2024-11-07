// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';  
import Info from './screens/Info'; 
import Iniciosesion from  './screens/Iniciosesion';
import CrearTicket from  './screens/CrearTicket';
import TicketInfo from './screens/TicketInfo';
import Registrarse from './screens/Registrarse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/info" element={<Info />} /> 
        <Route path="/Iniciar_Sesion" element={<Iniciosesion/>} />
        <Route path="/Crear ticket" element={<CrearTicket/>} />
        <Route path="/ticket/:id" element={<TicketInfo />} />
        <Route path="/Registrarse" element={<Registrarse />} />
      </Routes>
    </Router>
  );
}

export default App;
