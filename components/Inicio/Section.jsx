"use client";
import styles from "@/app/styles/inicio.module.css";
import { motion } from "framer-motion";

export default function Section({
  SinImagen = false,
  titulo,
  descripcion,
  imagenFondo,
}) {
  const estilo = SinImagen ? `${styles.SinImagen}` : styles.seccion;

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
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.descripcion}>{descripcion}</p>
      </motion.div>
    </section>
  );
}
