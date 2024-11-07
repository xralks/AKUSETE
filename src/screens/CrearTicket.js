import React, { useState, useEffect } from 'react';
import '../SoporteTecnicoForm.css';
import Menu from '../componentes/Menu';

function SoporteTecnicoForm() {
  const [titulo, setTitulo] = useState('');
  const [tipoProblema, setTipoProblema] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [sala, setSala] = useState('');
  const [imagenes, setImagenes] = useState(null);
  const [salas, setSalas] = useState([]); // Estado para almacenar las salas

  // Obtener salas desde el API al cargar el componente
  useEffect(() => {
    const fetchSalas = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/salas');
        if (response.ok) {
          const data = await response.json();
          setSalas(data); // Guardar las salas en el estado
        } else {
          console.error('Error al obtener las salas');
        }
      } catch (error) {
        console.error('Error en la solicitud de salas:', error);
      }
    };

    fetchSalas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('tipoProblema', tipoProblema);
    formData.append('descripcion', descripcion);
    formData.append('sala', sala);
    if (imagenes) {
      formData.append('imagenes', imagenes);
    }

    try {
      const response = await fetch('http://localhost:8080/api/tickets', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Ticket enviado con éxito');
      } else {
        alert('Error al enviar el ticket');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en la conexión con el servidor');
    }
  };

  const handleImageChange = (e) => {
    setImagenes(e.target.files[0]);
  };

  return (
    <div className="app-container">
      <header className="App-header">
        <Menu />
      </header>

      <div className="soporte-container">
        <div className="soporte-content">
          <div className="soporte-info">
            <h2>Crear un Ticket de Soporte Técnico</h2>
            <p>
              Estás a punto de crear un ticket para informar sobre una falla técnica. Este ticket será revisado por el equipo especializado en el área
              correspondiente para garantizar una solución rápida y eficiente.
            </p>
            <p>
              Por favor, proporciona la información detallada sobre el problema que estás experimentando. Nuestro equipo de soporte técnico se pondrá en
              contacto contigo lo antes posible para resolver la incidencia.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="soporte-form">
            <div className="form-group">
              <label>Título</label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Tipo de problema</label>
              <select
                value={tipoProblema}
                onChange={(e) => setTipoProblema(e.target.value)}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
                <option value="Red">Red</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Descripción</label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Sala</label>
              <select
                value={sala}
                onChange={(e) => setSala(e.target.value)}
                required
              >
                <option value="">Seleccione una sala</option>
                {salas.map((sala) => (
                  <option key={sala.id} value={sala.id}>
                    {sala.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Agregar Imágenes</label>
              <input
                type="file"
                onChange={handleImageChange}
              />
            </div>

            <button type="submit" className="submit-button">
              Enviar Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SoporteTecnicoForm;
