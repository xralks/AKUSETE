import React from 'react';
import MenuAdmin from '../componentes/MenuAdmin';  // Ajusta la ruta según tu estructura de carpetas
import '../UserAdmin.css';

function UserAdmin() {
  return (
    <div className="user-admin-container">
      <MenuAdmin /> {/* Aquí se incluye el componente MenuAdmin */}

      <div className="user-admin-content">
        <h1>Tickets Activos</h1>

        <div className="user-admin-grid">
          <div className="grid-item card-1">
            <h2>Solución de PC no enciende</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales urna elementum.</p>
          </div>

          <div className="grid-item card-2">
            <h2>Personas afectadas</h2>
            <p>Gráfico o información sobre personas afectadas</p>
          </div>

          <div className="grid-item card-3">
            <h2>Calendario</h2>
            <p>Información del calendario</p>
          </div>

          <div className="grid-item card-4">
            <h2>Porcentaje de tickets Activos</h2>
            <p>25%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAdmin;
