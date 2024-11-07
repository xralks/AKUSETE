import React from 'react';
import '../AdminAvisos.css';
import '../UserAdmin.css';
import MenuAdmin from '../componentes/MenuAdmin';  // Ajusta la ruta según tu estructura de carpetas

const avisos = [
  { titulo: "Solución de PC no enciende", descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales urna elementum.", tipo: "Urgente" },
  { titulo: "Solución de PC no enciende", descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales urna elementum.", tipo: "Menores" },
  { titulo: "Solución de PC no enciende", descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales urna elementum.", tipo: "Importantes" },
  { titulo: "Solución de PC no enciende", descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales urna elementum.", tipo: "Urgente" },
  { titulo: "Solución de PC no enciende", descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales urna elementum.", tipo: "Menores" },
];

const AdminAvisos = () => {
  return (
    <div className="user-admin-container">
        <MenuAdmin /> {/* Aquí se incluye el componente MenuAdmin */}
    <div className="user-admin-content">
      <h2> Avisos </h2>
      <div className="avisos-table">
        <div className="avisos-header">
          <div>Título</div>
          <div>Descripción</div>
          <div>Tipo</div>
        </div>
        {avisos.map((aviso, index) => (
          <div className="aviso-row" key={index}>
            <div className="titulo">{aviso.titulo}</div>
            <div className="descripcion">{aviso.descripcion}</div>
            <div className={`tipo ${aviso.tipo.toLowerCase()}`}>{aviso.tipo}</div> {/* Corrección aquí */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AdminAvisos;
