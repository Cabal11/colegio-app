"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/Modulos/vidaEstudiantil.module.css";
import { resolve } from "styled-jsx/css";

export default function Section() {
  const [secciones, setSecciones] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let intento = 0;
      const maxIntentos = 3;

      while (intento < maxIntentos) {
        try {
          console.log(`Llamando al api, intento ${intento + 1}`);
          const res = await fetch(
            "https://backend-nodejs-production-79b3.up.railway.app/api/seccion"
          );

          const data = res.json();

          if (data && res.ok) {
            setSecciones(data);
            break;
          } else {
            throw new Error("Datos vacios o problemas en la respuesta");
          }
        } catch (error) {
          console.error(`Problemas al traer los datos: ${error.message}`);
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
        <p className={styles.error}>Cargando...</p>
      </div>
    );
  }

  if (!secciones) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>
          No se pudieron cargar las secciones. Vuelve a intentar más tarde.
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
