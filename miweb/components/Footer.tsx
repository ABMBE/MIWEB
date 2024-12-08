import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
        <p>&copy; 2024 MiSitioWeb. Todos los derechos reservados.</p>
        <div className={styles.socials}>
            <a href="https://www.facebook.com/sebas.medina.142" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/Sxb4s_s" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.instagram.com/sebastian_medina001/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        </footer>
    );
};

export default Footer;
