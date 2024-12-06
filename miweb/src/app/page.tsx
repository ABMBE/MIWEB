//import Image from "next/image";
//import Layout from '../app/layout';
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/layout.module.scss";

export default function Home() {
  return (
    <div>
        <div className={styles.body}>
        <header>
          <Header></Header>
        </header>
        <main>
          <div>
            <div>
              <h2>¡HOLA!</h2>
              <h1>¡Soy Sebastian Medina!</h1>
              <p>INGENIERO DE SISTEMAS Y ADMINISTRATOR DE RED</p>
              <a href="doc/CV-SEBASTIAN.pdf" download className={styles.button}> Descargar CV </a>
            </div>
          </div>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
}

