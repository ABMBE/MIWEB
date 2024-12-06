import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styles from "../../../styles/projects.module.scss";
import Card from '../../../components/card';

const Projects: React.FC = () => {
    return (
        <div className={styles.page}>
                <header>
                    <Header></Header>
                </header>
            <main>
                <div>
                    <div className={styles.h1}>
                        <h1>PROYECTOS</h1>
                    </div>
                <div className={styles.projects}>
                        <div className={styles.card1}>
                            <Card name="Cableado estructurado" description="Participé en el proyecto de cableado estructurado del Instituto Geofísico del Perú, donde planifiqué, 
                            instalé y supervisé la infraestructura de comunicaciones. Colaboré con un equipo multidisciplinario para 
                            diseñar un plan optimizado, instalé cables de alta calidad y supervisé pruebas de conectividad. Además, documenté 
                            todo el proceso, asegurando una implementación eficiente que mejoró significativamente la capacidad de comunicación del instituto. 
                            Este proyecto fortaleció mis habilidades técnicas y mi experiencia en gestión de proyectos." photo="images/cableado.jpeg"></Card>
                        </div>
                        <div className={styles.card2}>
                            <Card name="Instalacion de equipos de Red" description="Participé en la configuración de switches y routers y cableado para la conectividad de 
                            red en varios edificios empresariales. Mi rol incluyó la evaluación de requisitos, diseño de la red, configuración de equipos, pruebas de rendimiento 
                            y documentación exhaustiva. El resultado fue una infraestructura de red mejorada que optimizó la conectividad y la seguridad de la empresa, 
                            fortaleciendo mis habilidades técnicas y de gestión de proyectos." photo="images/equipos.jpeg"></Card>
                        </div>
                        <div className={styles.card3}>
                            <Card name="Portafolio Virtual" description="Desarrollé esta página web utilizando Next.js y Node.js, enfocándome 
                            en la creación de una interfaz de usuario dinámica y eficiente. Implementé la estructura del sitio en Next.js para aprovechar su capacidad 
                            de renderizado del lado del servidor y mejorar el rendimiento. Node.js me permitió manejar las operaciones del servidor y la 
                            lógica del backend, asegurando una comunicación fluida y segura entre el cliente y el servidor. Este proyecto potenció mis habilidades 
                            en desarrollo web moderno y en la integración de tecnologías de frontend y backend." photo="images/next.jpeg"></Card>
                        </div>
                    </div>
                </div>
            </main>
                <footer>
                    <Footer></Footer>
                </footer>
    </div>
    );
};

export default Projects;
