import React, { useState } from 'react';

const Boton = ({ texto, tipo, espacio, borde, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={styles.button(hover, tipo, espacio, borde)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}  // Aquí se agrega el onClick
    >
      {texto}
    </button>
  );
};

const styles = {
  button: (hover, tipo, espacio, borde) => {
    const width = espacio || '40%';
    const border = borde || '50px';

    switch (tipo) {
      case 'azul':
        return {
          fontfamily: 'Onest',
          width: width,
          height: '53px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: hover ? '#3d36f5' : '#2a25ae',
          border: '2px solid #2a25ae',
          borderRadius: border,
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
        };
      case 'blancoAzul':
        return {
          width: width,
          height: '53px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: hover ? '#4850ff' : '#2a25ae',
          backgroundColor: 'transparent',
          border: hover ? '2px solid #4850ff' : '2px solid #2a25ae',
          borderRadius: '50px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
        };
      default:
        return {
          width: width,
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: hover ? '#2a25ae' : '#fff',
          backgroundColor: hover ? '#fff' : 'transparent',
          border: '2px solid #fff',
          borderRadius: '50px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        };
    }
  },
};

export default Boton;
