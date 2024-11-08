import React from 'react';
import '../App.css';
import Ram from '../img/RamS.webp';
import Ben from '../img/BenjaM.webp';
import Franu from '../img/francoU.webp';
import Frans from '../img/FranS.webp';
import Tomas from '../img/tomas.webp';
import Feli from '../img/felipeL.webp';
import rose from '../img/rose.webp';

// Importa las imágenes de redes sociales
import LinkedInIcon from '../img/linkedinazul.svg';
import GithubIcon from '../img/githubazul.svg';
import InstagramIcon from '../img/instagramazul.svg';

const Team = () => {
  const teamMembers = [
    { 
      name: 'Ramiro Sepúlveda', 
      role: 'Desarrollador Frontend', 
      img: Ram, 
      social: { 
        instagram: 'https://www.instagram.com/xralks/', 
        github: '', 
        linkedin: 'https://www.linkedin.com/in/ramiro-sep%C3%BAlveda-c%C3%A1ceres/' 
      }
    },
    { 
      name: 'Franco Urrutia', 
      role: 'Desarrollador Backend', 
      img: Franu, 
      social: { 
        instagram: 'https://www.instagram.com/fr4nks_12/', 
        github: '', 
        linkedin: '' 
      }
    },
    { 
      name: 'Benjamín Miranda', 
      role: 'Desarrollador Backend', 
      img: Ben, 
      social: { 
        instagram: 'https://www.instagram.com/b3njamiranda/', 
        github: '', 
        linkedin: '' 
      }
    },
    { 
      name: 'Francisco Salinas', 
      role: 'QA Tester', 
      img: Frans, 
      social: { 
        instagram: 'https://www.instagram.com/qilaqeo/', 
        github: '', 
        linkedin: '' 
      }
    },
    { 
      name: 'Felipe Lopez', 
      role: 'Integración y DevOps', 
      img: Feli, 
      social: { 
        instagram: '', 
        github: '', 
        linkedin: '' 
      }
    },
    { 
      name: 'Samuel Villagran', 
      role: 'Full-Stack', 
      img: rose, 
      social: { 
        instagram: 'https://www.instagram.com/', 
        github: '', 
        linkedin: '' 
      }
    },
    { 
      name: 'Tomas Flores', 
      role: 'Documentación', 
      img: Tomas, 
      social: { 
        instagram: 'https://www.instagram.com/tvfg.21/', 
        github: '', 
        linkedin: '' 
      }
    },
  ];


  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div className="team-card" key={index}>
          <div className="card-image-container">
            <img src={member.img} alt={member.name} className="card-image" />
          </div>
          <h2 className="member-name">{member.name}</h2>
          <p className="member-role">{member.role}</p>

          <div className="social-icons">
            <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href={member.social.github} target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="Github" className="social-icon" />
            </a>
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
