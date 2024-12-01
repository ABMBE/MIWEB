import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
        <p>&copy; 2024 MiSitioWeb. Todos los derechos reservados.</p>
        <div className={styles.socials}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        </footer>
    );
};

export default Footer;
