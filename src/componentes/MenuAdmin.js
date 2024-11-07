import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../MenuAdmin.css';
import logo from '../img/ticket.png'; 
function MenuAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica de cierre de sesión
    navigate('/login'); // Redirige a la página de login después de cerrar sesión
  };

  return (
    <div className="menu-admin-container">
      <div className="menu-admin-header">
        <h2>AKUSETE</h2>
      </div>

      <div className="menu-title">Menu</div>

      <nav className="menu-admin-nav">
        <ul>
          <li className="menu-admin-item">
            <Link to="/UserAdmin">Tickets activos</Link>
          </li>
          <li className="menu-admin-item">
            <Link to="/tickets-solucionados">Tickets solucionados</Link>
          </li>
          <li className="menu-admin-item">
            <Link to="/salas">Salas</Link>
          </li>
          <li className="menu-admin-item">
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="menu-admin-item">
            <Link to="/AdminCategorias">Categorías</Link>
          </li>
          <li className="menu-admin-item">
            <Link to="/AdminAvisos">Avisos</Link>
          </li>
          <li className="menu-admin-item logout-item" onClick={handleLogout}>
            Cerrar Sesión
          </li>
        </ul>
      </nav>

      {/* Contenedor con la foto, nombre, rol y notificaciones debajo de "Cerrar Sesión" */}
      <div className="menu-admin-profile">
        <div className="profile-info">
          <p className="profile-role">Administrador</p>
          <p className="profile-name">Juan Pérez</p>
        </div>
        <div className="profile-picture">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default MenuAdmin;
