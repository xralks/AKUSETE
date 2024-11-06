import React, { useState } from 'react';
import Boton from '../componentes/Boton';
import '../Login.css';
import '../Registro.css';
import Menu from '../componentes/Menu';

const Registro = () => {
  // Estado para los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Validación básica del formulario
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('¡Registro exitoso!');
      } else {
        alert(data.message || 'Ocurrió un error');
      }
    } catch (error) {
      alert('Error de red: ' + error.message);
    }
  };

  return (
    <section className="bodyregistro">
      <header className="App-header">
        <Menu />
      </header>
      <div className="registro-container">
        <div className="registro-form-container">
          <div className="registro-header">
            <h1>Crea tu cuenta</h1>
            <p>Estaremos encantados de que te unas a nosotros. Completa el formulario para registrarte y empezar a disfrutar de todos los beneficios.</p>
          </div>
          <div className="registro-content">
            <h2>¡Hola! Bienvenido</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ingresa tu nombre completo"
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu email"
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirma tu contraseña"
                />
              </div>
              <div className="containerboton">
                <Boton texto="Registrarme" tipo="azul" espacio="100%" borde="10px" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registro;
