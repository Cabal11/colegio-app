import React from "react";
import styles from "@/app/styles/inicio.module.css";
import Section from "../../components/Inicio/Section";

export default function Inicio() {
  return (
    <div className={styles.contenido}>
      <h1 className={styles.titulo}>Colegio Bocas de Nosara</h1>
      <h2 className={styles.subtitulo}>Fechas importantes</h2>
      <p className={styles.descripcion}>Descripcion</p>

      <Section
        titulo={"Matrícula"}
        descripcion={
          "Requisitos sobre la matrícula y detalles sobre el proceso"
        }
        imagenFondo={"https://res.cloudinary.com/dh26fm2su/image/upload/v1758927883/Captura_de_pantalla_53_dmafcn.png"}
      />

      <Section
        titulo={"Vida estudiantil"}
        descripcion={"Conoce el entorno que rodea a nuestros estudiantes"}
        imagenFondo={"https://res.cloudinary.com/dh26fm2su/image/upload/v1758927883/Captura_de_pantalla_53_dmafcn.png"}
      />

      <Section
      SinImagen={true}
        titulo={"Calidad académica"}
        descripcion={"Enseñando compromiso y buenos valores a los estudiantes"}
      />
    </div>
  );
}
