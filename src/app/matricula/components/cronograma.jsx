"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/Modulos/matricula.module.css";
import { retryFetch } from "../../utils/retry.js";

export default function cronograma() {
  const [cronograma, setCronograma] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //clave valor
    const key = "cronograma";
    //7 minutos
    const resetTime = 420000;
    //Hacer consulta
    const fetchData = async () => {
      try {
        const dataCache = localStorage.getItem(key);

        if (dataCache) {
          const { data, timestamp } = JSON.parse(dataCache);
          const ahora = Date.now();

          if (ahora - timestamp < resetTime) {
            setCronograma(data);
            setLoading(false);
            return;
          } else {
            //Obtener nuevos datos
            console.log("Consultando de nuevo al API cache expiro");
          }
        }

        //Primera solicitud para encender el servidor
        await fetch("https://backend-nodejs-production-79b3.up.railway.app/ping");

        //Obtener los datos
        const res = await retryFetch("https://backend-nodejs-production-79b3.up.railway.app/api/cronograma");

        //Si los datos son correctos los guarda y quita la pantalla de carga
        if (res) {
          const cacheData = {
            data: res,
            timestamp: Date.now(),
          };
          setCronograma(res);
          localStorage.setItem(key, JSON.stringify(cacheData));
          setLoading(false);
        }
      } catch (error) {
        console.error("Problema en la solicitud: ", error);
      }
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
