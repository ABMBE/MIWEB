'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styles from "../../../styles/contact.module.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_gadij3b', 'template_2f6ioh2', form.current!, '_7f6Y7VoIOn6bcHGO')
        .then(
            (result) => {
            console.log('SUCCESS!', result.text);
            alert('Mensaje enviado correctamente.');
            },
            (error) => {
            console.log('FAILED...', error.text);
            alert('Hubo un error al enviar el mensaje.');
            }
        );
    };

    return (
        <div>
        <div className={styles.body}>
            <header>
            <Header />
            </header>
            <main className={styles.main}>
            <div className={styles["form-container"]}>
                <h2>Contacto</h2>
                <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" name="user_name" className="form-control" id="name" placeholder="Tu nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" name="user_email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea name="message" className="form-control" id="message" placeholder="Tu mensaje" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
            <div className={styles["info-container"]}>
                <h2>Información de Contacto</h2>
                <p>
                <i className={`bi bi-geo-alt-fill ${styles.iconColor} large`}></i> Dirección: Av. Bolognesi 510 - Cayma
                </p>
                <p>
                <i className={`bi bi-telephone-fill ${styles.iconColor} large`}></i> Teléfono: +51 966366499
                </p>
                <p>
                <i className={`bi bi-envelope-fill ${styles.iconColor} large`}></i> Email: ermacsebas@gmail.com
                </p>
            </div>
            </main>
            <footer>
            <Footer />
            </footer>
        </div>
        </div>
    );
}
