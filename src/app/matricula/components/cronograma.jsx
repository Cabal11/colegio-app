"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/Modulos/matricula.module.css";

export default function cronograma() {
  const [cronograma, setCronograma] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let intento = 0;
      const maxIntentos = 3;

      while (intento < maxIntentos) {
        try {
          console.log(`Llamando al api, intento ${intento + 1}`);

          await fetch("http://localhost:3000/ping");
          await new Promise((r) => setTimeout(r, 3000));

          // const res = await fetch("http://localhost:3000/api/cronograma");
          const res = await fetch("https://backend-nodejs-production-79b3.up.railway.app/api/cronograma");
          

          const data = await res.json();

          if (data && res.ok) {
            setCronograma(data);
            break;
          } else {
            throw new Error("Datos vacios o problemas en la respuesta");
          }
        } catch (error) {
          console.error(`Servidor en reposo: ${error.message}`);
          intento++;
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <div className={styles.containerPuntos}>
            <div className={styles.pulser}></div>
            <div className={styles.pulser}></div>
            <div className={styles.pulser}></div>
          </div>
          Cargando información. Por favor espere.
        </div>
      </div>
    );
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
            <b>Fecha:</b> Del {formatoFecha(crono.fecha_inicio)} al{" "}
            {formatoFecha(crono.fecha_fin)}
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
