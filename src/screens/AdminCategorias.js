import React, { useEffect, useState } from 'react';
import MenuAdmin from '../componentes/MenuAdmin';  // Ajusta la ruta según tu estructura de carpetas
import '../AdminCategorias.css';
import '../UserAdmin.css';

function Categorias() {
  // Lista estática de categorías con nombres
  const nombresCategorias = ["Tecnico", "Construccion", "Salud", "Energia"];

  // Estado para almacenar las cantidades
  const [cantidades, setCantidades] = useState({});

  // Llama al backend para obtener las cantidades de las categorías
  useEffect(() => {
    fetch('http://localhost:8080/api/categorias')  // Asegúrate de que esta URL sea correcta
      .then((response) => response.json())
      .then((data) => {
        // Mapea los datos recibidos en un objeto donde el nombre de la categoría es la clave
        const cantidadesMap = {};
        data.forEach((categoria) => {
          cantidadesMap[categoria.nombre] = categoria.cantidad;
        });
        setCantidades(cantidadesMap);
      })
      .catch((error) => console.error('Error al obtener las cantidades:', error));
  }, []);

  return (
    <div className="user-admin-container">
        <MenuAdmin /> {/* Aquí se incluye el componente MenuAdmin */}
    <div className="user-admin-contentCategorias">
      <div className="categorias">
        <h2>Categorias</h2>
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