import React from "react";
import styles from "@/app/styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      {/* Icono del colegio */}
      <img className={styles.logo} src="/Logo_Colegio.webp"></img>

      {/* *Abrir una nueva pagina y tener seguridad con rel */}
      <a
        href="https://www.facebook.com/liceobocas"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Icono de Facebook */}
        <img className={styles.imagenFace} src="/facebook_icono.svg" alt="Icono colegio"></img>
      </a>
    </footer>
  );
}

export default Footer;
