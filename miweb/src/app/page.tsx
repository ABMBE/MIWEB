import Image from "next/image";
import React from "react";
import Layout from '../app/layout';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/layout.module.scss";

export default function Home() {
  return (
    <div>
        <div>
        <header>
          <Header></Header>
        </header>
        <main>
          <div className={styles.body}>
            <div>
              <h2>¡HOLA!</h2>
              <h1>¡Soy Sebastian Medina!</h1>
              <p>INGENIERO DE SISTEMAS Y ADMINISTRATOR DE RED</p>
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
