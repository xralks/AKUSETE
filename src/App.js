// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';  
import Info from './screens/Info'; 
import Iniciosesion from  './screens/Iniciosesion';
<<<<<<< HEAD
import CrearTicket from  './screens/CrearTicket';
import AdminCategorias from  './screens/AdminCategorias';
=======
import TicketInfo from './screens/TicketInfo';
>>>>>>> 78af92b495ea80f20cd0d1437246c60f67d1095a

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/info" element={<Info />} /> 
        <Route path="/Iniciar Sesion" element={<Iniciosesion/>} />
<<<<<<< HEAD
        <Route path="/Crear ticket" element={<CrearTicket/>} />
        <Route path="/Admin-Categorias" element={<AdminCategorias/>} />
=======
        <Route path="/ticket/:id" element={<TicketInfo />} />
>>>>>>> 78af92b495ea80f20cd0d1437246c60f67d1095a
      </Routes>
    </Router>
  );
}

export default App;
