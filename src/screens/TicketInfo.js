import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../componentes/Menu';
import '../TicketInfo.css';
import Footer from '../componentes/Footer';

function TicketInfo() {
  const { id } = useParams();
  const [ticketData, setTicketData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/tickets/${id}`);
        if (response.ok) {
          const data = await response.json();
          setTicketData(data);
        } else {
          setTicketData({
            title: 'Ticket no encontrado',
            description: 'No se encontró información para este ticket.',
            status: 'Desconocido',
            comments: [],
          });
        }
      } catch (error) {
        console.error('Error al obtener los datos del ticket:', error);
        setTicketData({
          title: 'Error al cargar datos',
          description: 'Hubo un problema al cargar los datos del ticket.',
          status: 'Error',
          comments: [],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTicketData();
  }, [id]);

  return (
    <div>
      <header className="App-header">
        <Menu />
      </header>

      <div className="ticket-main-container">
        {loading ? (
          <p>Cargando datos del ticket...</p>
        ) : (
          ticketData && (
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
                {ticketData.comments && ticketData.comments.length > 0 ? (
                  ticketData.comments.map((comment, index) => (
                    <div key={index} className="comment">
                      <p className="comment-author">{comment.author}</p>
                      <p className="comment-date">{comment.date}</p>
                      <p className="comment-text">{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <p>No hay comentarios. causa</p>
                )}
              </div>
            </>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TicketInfo;
