import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Menu from '../componentes/Menu';
import Footer from '../componentes/Footer';
import CountUp from 'react-countup';
import '../App.css';
import aku from '../img/estadistica.png';
import comunidad from '../img/manos.webp';
import Integrantes from '../componentes/Integrantes';
import Videoaku from '../videos/videoaku.mp4';

const Info = () => {
    const { ref: refContainerInfo1, inView: inViewContainerInfo1 } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    const { ref: refContainerInfo2, inView: inViewContainerInfo2 } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    const { ref: refCounter, inView: inViewCounter } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: 'easeInOut', delay: 0.3 } }
    };

    const imageContainerAnimation = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut', delay: 0.5 } }
    };

    return (
        <div className="App">
            <header className="App-header">
                <Menu />
            </header>

            <section style={styles.heroSection}>
                <video src={Videoaku} style={styles.heroVideo} autoPlay loop muted />
            </section>

            
            <section ref={refContainerInfo1} style={styles.containerinfo}>
                <div style={styles.ancho}>
                    <motion.div
                        style={styles.textContainer}
                        initial="hidden"
                        animate={inViewContainerInfo1 ? 'visible' : 'hidden'}
                        variants={fadeInUp}
                    >
                        <div style={styles.textoinfo}>
                            <h1 style={styles.titulo}>¿Cómo influye AKUSETE?</h1>
                            <p style={styles.texto2}>
                                AKUSETE es un servicio que se implementará en la Universidad Bernardo O'Higgins,
                                enfocado en mejorar la infraestructura, seguridad y bienestar del alumnado y el personal.
                                Este proyecto consiste en la creación de una plataforma web que centralizará recursos y
                                protocolos de emergencia, facilitando así una respuesta rápida y eficiente ante incidentes.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        style={styles.imageContainer}
                        initial="hidden"
                        animate={inViewContainerInfo1 ? 'visible' : 'hidden'}
                        variants={imageContainerAnimation}
                    >
                        <img src={aku} className="App-desmob" alt="logo" />
                    </motion.div>
                </div>
            </section>

            
            <section ref={refContainerInfo2} style={styles.containerinfo2}>
                <div style={styles.ancho}>
                    <motion.div
                        style={styles.imageContainer2}
                        initial="hidden"
                        animate={inViewContainerInfo2 ? 'visible' : 'hidden'}
                        variants={imageContainerAnimation}
                    >
                        <img src={comunidad} className="manos" alt="logo" />
                    </motion.div>
                    <motion.div
                        style={styles.textContainer}
                        initial="hidden"
                        animate={inViewContainerInfo2 ? 'visible' : 'hidden'}
                        variants={fadeInUp}
                    >
                        <div style={styles.textoinfo}>
                            <h1 style={styles.titulo}>Compromiso con la Comunidad</h1>
                            <p style={styles.texto2}>
                                AKUSETE no solo es una plataforma, sino un compromiso con la seguridad y bienestar
                                de todos en la universidad. A través de capacitaciones y un soporte continuo, buscamos
                                empoderar a la comunidad educativa para que puedan actuar de manera efectiva ante cualquier eventualidad.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            
            <section ref={refCounter} style={styles.containerinfo3}>
                <h1 style={styles.titulo2}>Confianza en Números</h1>
                <section style={styles.counterSection}>
                    <div style={styles.counterContainer}>
                        <motion.div
                            style={styles.counterItem}
                            initial="hidden"
                            animate={inViewCounter ? 'visible' : 'hidden'}
                            variants={fadeInUp}
                        >
                            <CountUp start={inViewCounter ? 0 : null} end={100} duration={5} />
                            <p style={styles.counterText}>Usuarios Activos</p>
                        </motion.div>
                        <motion.div
                            style={styles.counterItem}
                            initial="hidden"
                            animate={inViewCounter ? 'visible' : 'hidden'}
                            variants={fadeInUp}
                        >
                            <CountUp start={inViewCounter ? 0 : null} end={300} duration={5} />
                            <p style={styles.counterText}>Confían en Nosotros</p>
                        </motion.div>
                        <motion.div
                            style={styles.counterItem}
                            initial="hidden"
                            animate={inViewCounter ? 'visible' : 'hidden'}
                            variants={fadeInUp}
                        >
                            <CountUp start={inViewCounter ? 0 : null} end={150} duration={5} />
                            <p style={styles.counterText}>Problemas resueltos</p>
                        </motion.div>
                    </div>
                </section>
            </section>

            <section style={styles.section}>
                <h1 style={styles.titulo2}>Nuestro Equipo</h1>
                <Integrantes />
            </section>

            <Footer />
        </div>
    );
};

const styles = {
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
  imageContainer2: {
    flex: '1 1 300px',
    display: 'flex',
    justifyContent: 'center',
  },
  estadistica: {
    height: '44vmin',
  },
  textContainer: {
    flex: '2 1 200px',
    padding: '20px',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  containerinfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #C2D0FF, #7585ff)',
  },
  containerinfo2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    minHeight: '100vh',
  },
  containerinfo3: {
    paddingTop: '40px',
    minHeight: '50vh',
    backgroundColor: '#C2D0FF',
  },
  titulo: {
    fontSize: 'clamp(1.7rem, 2.8vw, 4rem)',
  },
  titulo2: {
    fontSize: 'clamp(1.7rem, 2vw, 4rem)',
    color: '#191650',
    textAlign: 'center',
  },
  texto: {
    fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
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
  section: {
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
    minHeight: '100vh',
  },
  heroSection: {
    position: 'relative',
    width: '100%',
    height: '55vh',
    overflow: 'hidden',
  },
  heroVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    margin: '0 auto',
  },
  heroOverlay: {
    width: '40%',
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heroTitle: {
    fontSize: 'clamp(1.7rem, 2.8vw, 3rem)',
    color: '#191650',
    margin: '0 0 10px 0',
  },
  counterSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#C2D0FF',
  },
  counterContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '1200px',
    width: '100%',
    flexWrap: 'wrap',
  },
  counterItem: {
    flex: '1 1 200px',
    textAlign: 'center',
    margin: '20px',
  },
  counterText: {
    fontSize: '1.2rem',
    color: '#272689',
    fontWeight: '600',
  },
};

export default Info;
