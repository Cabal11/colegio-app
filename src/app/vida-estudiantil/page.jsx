import React from "react";
import Section from "../../../components/VidaEstudiantil/Section";
import styles from "@/app/styles/vidaEstudiantil.module.css";

export default function VidaEstudiantil() {
  return (
    <div>
      <h1 className={styles.titulo}>Vida estudiantil</h1>

      <Section />

    </div>
  );
}
