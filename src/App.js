// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';  
import Info from './screens/Info'; 
import Iniciosesion from  './screens/Iniciosesion';
import CrearTicket from  './screens/CrearTicket';
import TicketInfo from './screens/TicketInfo';
import Registrarse from './screens/Registrarse';
import UserAdmin from './screens/UserAdmin';  // Importamos el componente UserAdmin
import AdminAvisos from './screens/AdminAvisos';  // Importamos el componente UserAdmin
import AdminCategorias from './screens/AdminCategorias';  // Importamos el componente UserAdmin

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
        <Route path="/UserAdmin" element={<UserAdmin />} /> 
        <Route path="/AdminAvisos" element={<AdminAvisos />} />
        <Route path="/AdminCategorias" element={<AdminCategorias />} />
      </Routes>
    </Router>
  );
}

export default App;
