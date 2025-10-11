import React from "react";
import styles from '@/app/styles/Modulos/matricula.module.css'

export default function cronograma() {
  return (
    <div className={styles.containerPeriodo}>
      <h3 className={styles.tituloPeriodo}>Periodo de matricula de</h3>
      <p className={styles.textoFecha}>Fecha: </p>
      <p className={styles.textoHorario}>Horario: </p>
    </div>
  );
}
