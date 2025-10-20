"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/Modulos/matricula.module.css";
import { retryFetch } from "../../utils/retry.js";
import Ping from "@/app/components/Ping";

export default function requisitos() {
  const [requisitos, setRequisitos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //clave valor
    const key = "requisitos";
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
            setRequisitos(data);
            setLoading(false);
            return;
          } else {
            //Obtener nuevos datos
            console.log("Consultando de nuevo al API cache expiro");
          }
        }

        //Primera solicitud para encender el servidor
        <Ping/>
        

        //Obtener los datos
        const res = await retryFetch("https://backend-nodejs-production-79b3.up.railway.app/api/requisitos");
        

        //Si los datos son correctos los guarda y quita la pantalla de carga
        if (res) {
          const cacheData = {
            data: res,
            timestamp: Date.now(),
          };
          setRequisitos(res);
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

  if (!requisitos || requisitos.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>
          No se pudieron cargar las requisitos. Fallo el servidor.
        </p>
      </div>
    );
  }

  // Agrupar requisitos por tipo
  const requisitosPorTipo = requisitos.reduce((acc, item) => {
    if (!acc[item.tipo]) {
      acc[item.tipo] = [];
    }
    acc[item.tipo].push(item.requisito);
    return acc;
  }, {});

  // Renderizar secciones por tipo
  const secciones = Object.entries(requisitosPorTipo).map(
    ([tipo, reqs], index) => (
      <section className={styles.cardTipos} key={index}>
        <h2 className={styles.subtitulo}>Requisitos {tipo}</h2>
        <ul className={styles.textoRequisitos}>
          {reqs.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </section>
    )
  );

  return <section className={styles.containerRequisitos}>{secciones}</section>;
}
