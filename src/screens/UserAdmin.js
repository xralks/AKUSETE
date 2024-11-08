import React, { useEffect, useState } from 'react';
import MenuAdmin from '../componentes/MenuAdmin';
import '../UserAdmin.css';

function UserAdmin() {
  const [tickets, setTickets] = useState([]);
  const [lastTicket, setLastTicket] = useState(null);
  const [activeTicketsCount, setActiveTicketsCount] = useState(0);
  const [totalTicketsCount, setTotalTicketsCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch('http://200.112.74.173:8080/api/tickets/ticketCom');
        if (response.ok) {
          const data = await response.json();
          setTickets(data);
          
          // Obtener el último ticket registrado
          const sortedTickets = [...data].sort((a, b) => new Date(b.fechaCreacionTicket) - new Date(a.fechaCreacionTicket));
          setLastTicket(sortedTickets[0]);

          // Filtrar personas afectadas
          const affectedUsers = data.map(ticket => ticket.nombreUsuario);
          setUsers(affectedUsers);

          // Filtrar fechas
          const ticketDates = data.map(ticket => new Date(ticket.fechaCreacionTicket).toLocaleDateString());
          setDates(ticketDates);

          // Filtrar tickets con estado "ACTIVO"
          const activeTickets = data.filter(ticket => ticket.estadoTicket === 'ACTIVO');
          setActiveTicketsCount(activeTickets.length);
          setTotalTicketsCount(data.length);
        }
      } catch (error) {
        console.error('Error al obtener los datos de los tickets:', error);
      }
    };

    fetchTicketData();
  }, []);

  // Calcular el porcentaje de tickets activos
  const activeTicketsPercentage = totalTicketsCount > 0 ? (activeTicketsCount / totalTicketsCount) * 100 : 0;

  return (
    <div className="user-admin-container">
      <MenuAdmin /> {/* Aquí se incluye el componente MenuAdmin */}

      <div className="user-admin-content">
        <h1>Tickets Activos</h1>

        <div className="user-admin-grid">
          <div className="grid-item card-1">
            <h2>Último Ticket Registrado</h2>
            {lastTicket ? (
              <>
                <p>{lastTicket.descripcionTicket}</p>
                <p>Estado: {lastTicket.estadoTicket}</p>
                <p>Fecha de creación: {new Date(lastTicket.fechaCreacionTicket).toLocaleDateString()}</p>
              </>
            ) : (
              <p>No hay tickets registrados.</p>
            )}
          </div>

          <div className="grid-item card-2">
            <h2>Personas Afectadas</h2>
            <ul>
              {users.length > 0 ? (
                users.map((user, index) => <li key={index}>{user}</li>)
              ) : (
                <p>No hay usuarios afectados.</p>
              )}
            </ul>
          </div>

          <div className="grid-item card-3">
            <h2>Calendario</h2>
            <div className="calendar">
              {dates.length > 0 ? (
                <ul>
                  {dates.map((date, index) => (
                    <li key={index}>{date}</li>
                  ))}
                </ul>
              ) : (
                <p>No hay fechas disponibles.</p>
              )}
            </div>
          </div>

          <div className="grid-item card-4">
            <h2>Porcentaje de Tickets Activos</h2>
            <p>{activeTicketsPercentage.toFixed(2)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAdmin;