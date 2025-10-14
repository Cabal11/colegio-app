import React from "react";
import styles from "@/app/styles/Modulos/matricula.module.css";
import next from "next";

export default async function cronograma() {
  let cronograma = [];

  try {
    // const res = await fetch("http://localhost:3000/api/cronograma");
    const res = await fetch("https://backend-nodejs-production-79b3.up.railway.app/api/cronograma", {next: {revalidate: 480}});

    if (!res.ok) {
      throw new Error(`Problemas al conectar: ${res.status}`);
    }

    cronograma = await res.json();
  } catch (error) {
    console.error("Problemas al obtener la informacion en el servidor:", error);
    // Se puede asignar datos de respaldo o dejar el arreglo vacío
    cronograma = null;
  }

  if (!cronograma || cronograma.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>Sin calendario, por los momentos.</p>
      </div>
    );
  }

  return (
    <div className={styles.containerPeriodo}>
      {cronograma.map((crono, index) => (
        <section key={index} className={styles.cardFechas}>
          <h3 className={styles.subtitulo}>
            Matrícula de {crono.tipo_proceso}
          </h3>
          <p className={styles.textoFechas}>
            <b>Fecha:</b> Del {formatoFecha(crono.fecha_inicio)} al {formatoFecha(crono.fecha_fin)}
          </p>
          <p className={styles.textoHorario}>
            <b>Horario de atención:</b> De {crono.hora_inicio} a{" "}
            {crono.hora_fin}
          </p>
        </section>
      ))}
    </div>
  );
}

function formatoFecha(fechas) {
  let fecha = new Date(fechas);
  const opciones = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formato = new Intl.DateTimeFormat("es-ES", opciones);
  return formato.format(fecha);
}
