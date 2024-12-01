import React from 'react';
import styles from "../../../styles/about.module.scss";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const About: React.FC = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <div className={styles.about}>
                    <h1>SOBRE MI</h1>
                    <p>Estudiante de Ingeniería de Sistemas cursando el primer año de mi carrera, 
                        me interesa mucho la tecnología y el uso tan productivo que esta puede tener 
                        en nuestro día a día, me gusta mucho el mundo de la programación y de la Ciberseguridad.
                        Soy egresado de la carrera de Administración de Redes y Comunicaciones de Datos, 
                        cuento con experiencia en diseñar, implementar y mantener infraestructuras de red. 
                        Mi enfoque se centra en la seguridad, la optimización del rendimiento y la resolución de problemas.</p>
                </div>
            </div>
                <div>
                    <Footer></Footer>
                </div>
        </div>
    );
};

export default About;