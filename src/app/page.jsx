import React from "react";
import styles from "@/app/styles/Modulos/inicio.module.css";
import Section from "./components/Section";

export default function Inicio() {
  return (
    <div className={styles.contenido}>
      <h1 className={styles.titulo}>Colegio Bocas de Nosara</h1>
      <h2 className={styles.tituloFecha}>Fechas importantes</h2>
      <p className={styles.descripcionFecha}>Descripcion</p>

      {/* Cada seccion envia un parametro al componente Section para realizar el renderizado y validar si no tiene imagen mediante un booleano */}
      <Section
        titulo={"Matrícula"}
        descripcion={
          "Matricula en el colegio Bocas de Nosara y disfruta de una experiencia inolvidable, se encuentran las materias básicas, así como talleres exploratorios, educación musical, informática educativa y mucho más."
        }
        imagenFondo={
          "https://raw.githubusercontent.com/Cabal11/Imagenes/main/assets/Colegio_name.webp"
        }
      />

      <Section
        titulo={"Vida estudiantil"}
        descripcion={
          "La famosa frase “Jale a dar una vuelta” para ir conociendo las distintas aulas y comprando golosinas en la soda situada dentro de la institución. Además de disfrutar de múltiples actividades y salidas a otros colegios representando la institución en competencias."
        }
        imagenFondo={
          "https://raw.githubusercontent.com/Cabal11/Imagenes/main/assets/Institucion.webp"
        }
      />

      <Section
        SinImagen={true}
        titulo={"Calidad académica"}
        descripcion={
          "Servicio educativo cuyo propósito es desarrollar al máximo las potencialidades, independencia y formación para el desempeño de una actividad productiva/laboral o bien, la continuidad del proceso educativo, ofertas formativas o educativas. Además, estimula el desarrollo de conocimientos, habilidades y destrezas de vida personal, esencial en la construcción del proyecto de vida."
        }
      />
    </div>
  );
}
