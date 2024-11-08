import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../componentes/Menu';
import Boton from '../componentes/Boton';
import Footer from '../componentes/Footer';
import logo from '../img/ticket.png';
import aku from '../img/akumobdes11.png';
import ticketerror from '../img/ticketerror.svg';
import informal from '../img/inmormal.svg';
import sos from '../img/sos.svg';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener los tickets desde la API
  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/tickets/details');
      const data = await response.json();
      setTickets(data); // Almacenamos los tickets en el estado
      setLoading(false); // Terminamos de cargar
    } catch (error) {
      console.error('Error fetching tickets:', error);
      setLoading(false); // Terminamos de cargar incluso si hubo error
    }
  };

  // useEffect para cargar los tickets cuando el componente se monta
  useEffect(() => {
    fetchTickets();
  }, []);

  const handleTicketClick = (ticketId) => {
    navigate(`/ticket/${ticketId}`);
  };

  const irAInfo = () => {
    navigate('/info');
  };
  
  const CrearTicket = () => {
    navigate('/Crear Ticket'); 
  };
  
  const irsesion = () => {
    navigate('/iniciar_sesion');
  };

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <main style={styles.mainContainer}>
        <div style={styles.ancho}>
          <div style={styles.imageContainer}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div style={styles.textContainer}>
            <h1 style={styles.titulo}>
              Crea un ticket para dar aviso a la institución del problema.
            </h1>
            <p style={styles.texto}>
              Estarás ayudando a mejorar el ambiente estudiantil y entregando seguridad.
            </p>
            <div style={styles.containerBotones}>
              <Boton texto="Crear Ticket" tipo="azul" onClick={irsesion} />
              <Boton texto="Leer Más" tipo="blancoAzul" onClick={irAInfo} />
            </div>
          </div>
        </div>
      </main>
      <div style={styles.busqueda}>
        <p style={styles.busquedaTexto}>Búsqueda</p>
      </div>
      <section style={styles.section}>
        <h1 style={styles.titulo2}>Tickets en evaluación</h1>
        <div style={styles.cardContainer}>
          {loading ? (
            <p>Cargando tickets...</p> // Muestra un mensaje de carga
          ) : tickets.length > 0 ? (
            tickets.map((ticket) => (
              <div
                key={ticket.idTicket}
                style={styles.card}
                onClick={() => handleTicketClick(ticket.idTicket)}
              >
                <h2 style={styles.cardTitle}>Ticket #{ticket.idTicket}</h2>
                <p style={styles.cardDescription}>{ticket.descripcionTicket}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron tickets.</p> // Mensaje si no hay tickets
          )}
        </div>
        <div style={styles.containerBotones}>
          <Boton texto="Ver Más" tipo="blancoAzul" espacio="144px" />
        </div>
      </section>
      <section style={styles.containerinfo}>
        <div style={styles.ancho}>
          <div style={styles.textContainer}>
            <div style={styles.textoinfo}>
              <h1 style={styles.titulo2}>¿Qué es AKUSETE?</h1>
              <p style={styles.texto2}>
                AKUSETE es una plataforma web innovadora diseñada para mejorar la
                seguridad y el bienestar en instituciones educativas, comenzando
                por la Universidad Bernardo O'Higgins. Nuestro objetivo es
                proporcionar un entorno más seguro tanto para los estudiantes
                como para el personal, a través de herramientas y protocolos
                eficaces que respondan a situaciones de emergencia.
              </p>
            </div>
            <div style={styles.containerBotones}>
              <Boton texto="Leer Más" tipo="azul" onClick={irAInfo} />
            </div>
          </div>
          <div style={styles.imageContainer}>
            <img src={aku} className="App-desmob" alt="logo" />
          </div>
        </div>
      </section>
      <section style={styles.section}>
        <div style={styles.tituloboton}>
          <h1 style={styles.titulo2}>Advertencias</h1>
        </div>
        <div className="Containeravisos">
          <div className="itemaviso">
            <img src={ticketerror} className="icono-logo" alt="logo" />
            <h1>Creacion tickets falsos</h1>
            <p>
              Evitar la creación de tickets falsos es crucial para mantener la
              confianza en el sistema. Esta práctica puede alertar a los
              encargados y generar respuestas innecesarias. Además, puede tener
              repercusiones legales y afectar la reputación del sitio web.
            </p>
          </div>
          <div className="itemaviso">
            <img src={informal} className="icono-logo" alt="logo" />
            <h1>Informalidad y groserias</h1>
            <p>
              El uso de lenguaje informal y grosero puede perjudicar la
              comunicación y el ambiente laboral. Mantener un tono respetuoso es
              clave para fomentar el respeto y la colaboración, evitando ofensas
              y malentendidos.
            </p>
          </div>
          <div className="itemaviso">
            <img src={sos} className="icono-logo" alt="logo" />
            <h1>Solo para emergencias</h1>
            <p>
              Es esencial utilizar el sitio web designado "solo para
              emergencias" deben usarse con responsabilidad. Su uso inapropiado
              puede comprometer la respuesta ante situaciones críticas y
              acarrear sanciones. Evalúa siempre la necesidad antes de recurrir
              a ellos.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    background: 'linear-gradient(to bottom, #444BFF, #C2D0FF)',
  },
  ancho: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '0 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    width: '100%',
  },
  imageContainer: {
    flex: '1 1 300px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  textContainer: {
    flex: '2 1 200px',
    padding: '20px',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  containerBotones: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    flexDirection: 'row',
  },
  containerinfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    minHeight: '70vh',
    backgroundColor: '#C2D0FF',
  },
  title: {
    fontSize: '2rem',
    margin: '0 0 10px 0',
  },
  titulo: {
    fontSize: 'clamp(1.7rem, 2.8vw, 4rem)',
  },
  titulo2: {
    fontSize: 'clamp(1.7rem, 2vw, 4rem)',
    color: '#191650',
  },
  texto: {
    fontSize: 'clamp(1.2rem, 1.5vw, 2rem)',
    fontWeight: '100',
  },
  texto2: {
    fontSize: 'clamp(1.2rem, 1.1vw, 2rem)',
    fontWeight: '100',
  },
  textoinfo: {
    maxWidth: '1200px',
    color: '#191650',
  },
  busqueda: {
    position: 'relative',
    top: '-30px',
    width: '70%',
    height: '70px',
    backgroundColor: '#272689',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  },
  busquedaTexto: {
    color: '#fff',
    fontSize: '18px',
    margin: 0,
  },
  section: {
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '1150px',
    padding: '20px',
    minHeight: '70vh',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '40px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#666',
  },
};

export default Home;