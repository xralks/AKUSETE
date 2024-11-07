import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../componentes/Menu';
import '../TicketInfo.css';
import Footer from '../componentes/Footer';

function TicketInfo() {
  const { id } = useParams();
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      const fakeDatabase = {
        '89460239': {
          id: '89460239',
          title: 'Solución de PC no enciende',
          creationDate: '03-10-2024',
          room: 'Sala 2-14',
          location: 'Viña',
          type: 'Técnico',
          severity: 'Urgente',
          status: 'Pendiente',
          description: 'Este es un problema recurrente en el aula debido a un fallo en el sistema eléctrico.',
          comments: [
            { author: 'Brandon', date: '03-10-2024', text: 'Comentario de Brandon...' },
            { author: 'Javier', date: '03-10-2024', text: 'Comentario de Javier...' }
          ]
        }
      };
      setTicketData(fakeDatabase[id] || { title: 'Ticket no encontrado', description: 'hola soy la descripcion', status: 'Desconocido', comments: [] });
    };

    fetchTicketData();
  }, [id]);

  return (
    <div>
      <header className="App-header">
        <Menu />
      </header>

      <div className="ticket-main-container">
        {ticketData ? (
          <>
            <div className="ticket-info">
              <h1>{ticketData.title}</h1>
              <p className="ticket-status">Estado: {ticketData.status}</p>
              <p>Fecha de creación: {ticketData.creationDate || 'N/A'}</p>
              <p>Sala: {ticketData.room || 'N/A'}</p>
              <p>Ubicación: {ticketData.location || 'N/A'}</p>
              <p>Tipo: {ticketData.type || 'N/A'}</p>
              <p>Severidad: {ticketData.severity || 'N/A'}</p>
            </div>

            <div className="description-section">
              <h2>Descripción</h2>
              <p>{ticketData.description}</p>
            </div>

            <div className="comments-section">
              <h2>Comentarios</h2>
              {ticketData.comments.length > 0 ? (
                ticketData.comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <p className="comment-author">{comment.author}</p>
                    <p className="comment-date">{comment.date}</p>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                ))
              ) : (
                <p>No hay comentarios.</p>
              )}
            </div>
          </>
        ) : (
          <p>Cargando datos del ticket...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TicketInfo;
