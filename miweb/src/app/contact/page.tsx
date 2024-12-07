import React from "react";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styles from "../../../styles/contact.module.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Contact() {
    return (
        <div>
        <div className={styles.body}>
            <header>
            <Header />
            </header>
            <main className={styles.main}>
            <div className={styles["form-container"]}>
                <h2>Contacto</h2>
                <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="message"  placeholder="Tu mensaje"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
            <div className={styles["info-container"]}>
                <h2>Información de Contacto</h2>
                <p>
                <i className="bi bi-geo-alt-fill"></i> Dirección: Calle Ejemplo 123, Ciudad, País
                </p>
                <p>
                <i className="bi bi-telephone-fill"></i> Teléfono: +123 456 7890
                </p>
                <p>
                <i className="bi bi-envelope-fill"></i> Email: contacto@ejemplo.com
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



