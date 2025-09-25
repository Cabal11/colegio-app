import React from "react";
import styles from "@/app/styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <img className={styles.logo} src="/foto1.png"></img>

      {/* *Abrir una nueva pagina y tener seguridad con rel */}
      <a
        href="https://www.facebook.com/liceobocas"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.imagenFace} src="/facebook_icono.svg"></img>
      </a>
    </footer>
  );
}

export default Footer;
