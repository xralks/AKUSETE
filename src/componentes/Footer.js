import React from 'react';
import { useNavigate } from 'react-router-dom';
import githubblanco from '../img/github.svg';
import linkedinblanco from '../img/linkedin.svg';
import instagramblanco from '../img/instagram.svg';
import facebookblanco from '../img/facebook.svg';

const Footer = () => {
  const navigate = useNavigate();

  const irhome = () => {
    navigate('/');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      irhome();
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <h2 className="logo" onClick={irhome} onKeyPress={handleKeyPress} style={{ cursor: 'pointer' }} tabIndex="0" role="button">
            AKUSETE
          </h2>
          <p className="description">
          AKUSETE es un servicio destinado a mejorar el ambiente estudiantil y entregar seguridad.
          </p>
        </div>
        <div className="social-icons1">
          <img src={githubblanco} alt="GitHub" className="icon1" />
          <img src={linkedinblanco} alt="LinkedIn" className="icon1" />
          <img src={instagramblanco} alt="Instagram" className="icon1" />
          <img src={facebookblanco} alt="Facebook" className="icon1" />
        </div>
      </div>
      <div className="copyright">
        Copyright 2024 QUANTUMCODERS
      </div>
    </footer>
  );
};

const styles = `
  .footer {
    background-color: #1e1e4b;
    color: white;
    padding: 20px;
    font-family: Onest, Arial, sans-serif;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 10px;
  }

  .logo {
    font-size: 24px;
    margin: 0;
  }

  .description {
    max-width: 300px;
    margin: 10px 0;
  }

  .social-icons1 {
    display: flex;
    gap: 10px;
  }

  .icon1 {
    width: 24px;
    height: 24px;
  }

  .copyright {
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 10px;
    font-size: 14px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Footer;
