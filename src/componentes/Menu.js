import React from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import Boton from './Boton';

const Menu = () => {
  const navigate = useNavigate();

  const irsesion = () => {
    navigate('/iniciar_sesion');
  };

  return (
    <nav style={styles.menu}>
      <Link to="/" style={styles.logo}>
        AKU<span style={styles.logo2}>SETE</span>
      </Link>
      <div style={styles.spacer}></div>
      <Boton texto="Inicia / Regístrate" espacio="177px" onClick={irsesion} />
    </nav>
  );
};

const styles = {
  menu: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 50px',
    backgroundColor: '#444BFF',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
  logo2: {
    fontSize: '24px',
    fontWeight: '100',
    color: '#fff',
  },
  spacer: {
    flexGrow: 1,
  },
};

export default Menu;
