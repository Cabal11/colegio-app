import React from "react";
import styles from "../styles/Modulos/contacto.module.css";

export default function Contacto() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Contáctenos</h1>
      <div className={styles.container}>
        <section className={styles.tarjeta}>
          <div className={styles.texto}>
            <h1>Facebook</h1>
            <p>Visítanos en nuestra página oficial <a href="https://www.facebook.com/liceobocas">Colegio Bocas de Nosara </a></p>
            {/*Enlace a la pagina de facebook*/}
          </div>
        </section>

        <section className={styles.tarjeta}>
          <div className={styles.texto}>
            <h1>Correo</h1>
            <p>Envíanos un mensaje al correo <a href="mailto:lic.debocasdenosara@mep.go.cr">lic.debocasdenosara@mep.go.cr</a></p>
            {/*Enlace para enviar correo*/}
          </div>
        </section>

        <section className={styles.tarjeta}>
          <div className={styles.texto}>
            <h1>Teléfono</h1>
            <p>Llámanos para más información al número <a href="tel:+50626820522">+506 2682-0522</a></p>
            {/*Envia al usuario a su app telefono para realizar llamada*/}
          </div>
        </section>

        <section className={styles.tarjeta}>
          <div className={styles.texto}>
            <h1>Dirección</h1>
            <p>Estamos ubicados diagonal al salón de Santa Teresita</p>
            {/* Informacion sobre la direccion de la institucion */}
          </div>
        </section>
      </div>
    </main>
  );
}
