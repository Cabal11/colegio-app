"use client";
import { useState, useEffect } from "react";
import { retryFetch } from "../../utils/retry.js";
import styles from "@/app/styles/Modulos/vidaEstudiantil.module.css";
import Ping from "@/app/components/Ping";

export default function Section() {
  const [secciones, setSecciones] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //clave valor
    const key = "secciones";
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
            setSecciones(data);
            setLoading(false);

            return;
          } else {
            //Obtener nuevos datos
            console.log("Consultando de nuevo al API cache expiro");
          }
        }

        //Primera solicitud para encender el servidor
        <Ping />;

        //Obtener los datos
        const res = await retryFetch(
          "http://localhost:3000/api/seccion"
        );

        

        //Si los datos son correctos los guarda y quita la pantalla de carga
        if (res) {
          const cacheData = {
            data: res,
            timestamp: Date.now(),
          };
          setSecciones(res);
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
        <section className={styles.error}>
          <div className={styles.containerPuntos}>
            <div className={styles.pulser}></div>
            <div className={styles.pulser}></div>
            <div className={styles.pulser}></div>
          </div>
          Cargando información. Por favor espere.
        </section>
      </div>
    );
  }

  if (!secciones) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>
          No se pudieron cargar las secciones. Fallo el servidor.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {secciones.map((seccion, index) => (
        // index % 2 === 0; //Verdadero si es par, falso si es impar

        <div key={index} className={styles.secciones}>
          <img
            className={index % 2 === 0 ? styles.imagenInvertida : styles.imagen}
            src={seccion.imagenURL}
            alt="Imagen sin cargar"
            loading="lazy"
          />

          <section
            className={
              index % 2 === 0 ? styles.cajaTextoInvertida : styles.cajaTexto
            }
          >
            <h2 className={styles.tituloSeccion}>{seccion.nombre_seccion}</h2>
            <p className={styles.descripcion}>{seccion.informacion}</p>
          </section>
        </div>
      ))}
    </div>
  );
}
