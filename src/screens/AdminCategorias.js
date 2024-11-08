import React, { useEffect, useState } from 'react';
import MenuAdmin from '../componentes/MenuAdmin';  // Ajusta la ruta según tu estructura de carpetas
import '../AdminCategorias.css';
import '../UserAdmin.css';

function Categorias() {
  const nombresCategorias = ["Hardware", "Softwere", "Red", "Otros"];

  const [cantidades, setCantidades] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/api/tickets/details')  // Asegúrate de que esta URL sea correcta
      .then((response) => response.json())
      .then((data) => {
        // Crear un objeto para contar las categorías
        const contador = {
          Hardware: 0,
          Softwere: 0,
          Red: 0,
          Otros: 0,
        };

        // Contar la cantidad de tickets por tipo de problema
        data.forEach((ticket) => {
          const tipoProblema = ticket.nombreTipoProblema;
          if (contador.hasOwnProperty(tipoProblema)) {
            contador[tipoProblema]++;
          }
        });

        setCantidades(contador);
      })
      .catch((error) => console.error('Error al obtener las cantidades:', error));
  }, []);

  return (
    <div className="user-admin-container">
      <MenuAdmin /> {/* Aquí se incluye el componente MenuAdmin */}
      <div className="user-admin-contentCategorias">
        <div className="categorias">
          <h2>Categorías</h2>
          <div className="categoria-list">
            {nombresCategorias.map((nombre) => (
              <div key={nombre} className="categoria-item">
                <span className="categoria-nombre">{nombre}</span>
                <span className="categoria-cantidad">
                  Cantidad: {cantidades[nombre] || 0}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;