"use client";
import styles from "@/app/styles/Modulos/inicio.module.css";
import { motion } from "framer-motion";

//Recibe la informacion enviado en los parametros para renderizar en la web
export default function Section({
  SinImagen = false,
  titulo,
  descripcion,
  imagenFondo,
}) {
  //Cambiar los estilos segun si tienen o no imagen de fondo
  const estilo = SinImagen ? styles.SinImagen : styles.seccion;
  const estiloTitulo = SinImagen
    ? styles.tituloSinImagen
    : styles.tituloSeccion;

  return (
    <section className={estilo}>
      <img className={styles.fondo} src={imagenFondo} alt="Fondo colegio"></img>
      <motion.div
        className={styles.texto_secciones}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h2 className={estiloTitulo}>{titulo}</h2>
        <p className={styles.descripcion}>{descripcion}</p>
      </motion.div>
    </section>
  );
}
