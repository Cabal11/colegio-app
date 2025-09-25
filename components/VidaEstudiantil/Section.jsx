import React from "react";
import styles from "@/app/styles/vidaEstudiantil.module.css";

function Section({ invertido = false, urlImagen, titulo, descripcion }) {

  const imagen = invertido ? styles.imagenInvertida : styles.imagen;
  const texto = invertido ? styles.cajaTextoInvertida: styles.cajaTexto;

  return (
    <div className={styles.container}>
      

      <div className={styles.secciones}>
        <img
          className={imagen}
          // src="/foto1.png"
          src={urlImagen}
          alt="Imagen sin cargar"
          loading="lazy"
        />

        <section className={texto}>
          <h2 className={styles.tituloSeccion}>{titulo}</h2>
          <p className={styles.descripcion}>{descripcion}</p>
        </section>

      </div>
    </div>
  );
}

export default Section;
