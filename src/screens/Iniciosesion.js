import React, { useState } from 'react';
import Boton from '../componentes/Boton';
import '../Login.css';
import Menu from '../componentes/Menu';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate

const Login = () => {
  // Estado para los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();  // Hook para navegación

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const userData = {
      emailUsuario: email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      // Comprobamos si la respuesta es exitosa
      if (response.ok && data.message === "Inicio de sesión exitoso") {
        // Redirigir al usuario a la página /home después de un inicio de sesión exitoso
        navigate('/UserAdmin'); // Cambiar a la ruta deseada
      } else {
        alert(data.message || 'Ocurrió un error');
      }
    } catch (error) {
      alert('Error de red: ' + error.message);
    }
  };

  return (
    <section className='bodylogin'>
      <header className="App-header">
        <Menu />
      </header>
      <div className="login-container">
        <div className="login-form">
          <div className="login-header">
            <h1>Accede o crea tu cuenta</h1>
            <p>Únete a nuestra comunidad.</p>
          </div>
          <div className="login-content">
            <h2>Hola! Bienvenido</h2>
            <form onSubmit={handleSubmit}>
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
              <div className="options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label htmlFor="remember">Recordarme</label>
                </div>
              </div>
              <div className="containerboton">
                <Boton texto="Iniciar Sesión" tipo="azul" espacio="100%" borde="10px" className="boton" />
              </div>
            </form>
            <p className="create-account">
              ¿Aún no tienes una cuenta? <a href="/Registrarse">Crea una cuenta</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
