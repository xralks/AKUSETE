import React from 'react';
import Boton from '../componentes/Boton';
import '../Login.css';
import Menu from '../componentes/Menu';

const Login = () => {
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
            <form>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Ingresa tu email" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" placeholder="Ingresa tu contraseña" />
              </div>
              <div className="options">
                <div className="remember-me">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Recordarme</label>
                </div>
                <a href="/recuperar-contraseña" className="forgot-password">Recuperar Contraseña!</a>
              </div>
              <div className="containerboton">
                <Boton texto="Iniciar Sesión" tipo="azul" espacio="100%" borde="10px" />
              </div>
            </form>
            <p className="create-account">
              ¿Aún no tienes una cuenta? <a href="/crear-cuenta">Crea una cuenta</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
