import React from "react";
import styles from "@/app/styles/Modulos/inicio.module.css";
import Section from "./components/Section";
import Fechas from "./components/Fechas";
import Ping from "./components/Ping";

export default function Inicio() {
  return (
    <div className={styles.contenido}>
      <Ping />
      <h1 className={styles.titulo}>Colegio Bocas de Nosara</h1>
      <h1 className={styles.lema}>El futuro se construye hoy</h1>
      <div>
        {/* Componente de fechas especiales o patrioticos del mes */}
        <Fechas />
      </div>

      {/* Cada seccion envia un parametro al componente Section para realizar el renderizado y validar si no tiene imagen mediante un booleano */}
      <Section
        titulo={"Matrícula"}
        descripcion={
          "Matrícula en el colegio Bocas de Nosara y disfruta de una experiencia inolvidable, se encuentran las materias básicas, así como talleres exploratorios, educación musical, informática educativa, inglés y mucho más."
        }
        imagenFondo={"/colegio_name.webp"}
      />

      <Section
        titulo={"Vida estudiantil"}
        descripcion={
          "Disfruta de múltiples actividades dentro y fuera de la institución. Donde son muchos de los momentos para que queden el recuerdo. Tanto como las salidas en competencias, viajes de la banda, el FEA y otros."
        }
        imagenFondo={"/institucion.webp"}
      />

      <Section
        SinImagen={true}
        titulo={"Calidad académica"}
        descripcion={
          "Servicio educativo cuyo propósito es desarrollar al máximo las potencialidades, independencia y formación para el desempeño de una actividad productiva/laboral o bien, la continuidad del proceso educativo, ofertas formativas o educativas. Además, estimula el desarrollo de conocimientos, habilidades y destrezas de vida personal, esencial en la construcción del proyecto de vida."
        }
      />
      <Section
        SinImagen={true}
        titulo={"Misión"}
        descripcion={
          "Ofrecer a nuestros estudiantes una educación innovadora enmarcada dentro de los mayores estándares de calidad, procurando a su vez un equilibrio en lo cognitivo, afectivo, disciplina y escala de valores que permitan reforzar nuestra identidad guanacasteca."
        }
      />
      <Section
        SinImagen={true}
        titulo={"Visión"}
        descripcion={
          "Formar estudiantes pensantes que sean capaces de enfrentar de la mejor manera a las diferentes exigencias de la sociedad e insertarse eficiente y eficazmente al proceso de producción nacional."
        }
      />
    </div>
  );
}
