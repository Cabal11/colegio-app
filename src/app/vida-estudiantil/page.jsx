import React from "react";
import Section from "./components/Section";
import styles from "@/app/styles/Modulos/vidaEstudiantil.module.css";

export default function VidaEstudiantil() {
  return (
    <div>
      <h1 className={styles.titulo}>Vida estudiantil</h1>

      {/* Componente que contiene toda la seccion de vida estudiantil */}
      <Section />
    </div>
  );
}
