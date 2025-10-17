"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/Modulos/matricula.module.css";

export default function requisitos() {
  const [requisitos, setRequisitos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let intento = 0;
      const maxIntentos = 3;

      while (intento < maxIntentos) {
        try {
          console.log(`Llamando al api, intento ${intento + 1}`);
          await fetch("https://backend-nodejs-production-79b3.up.railway.app/ping");
          await new Promise((r) => setTimeout(r, 3000));

          // const res = await fetch("http://localhost:3000/api/requisitos");
          const res = await fetch("https://backend-nodejs-production-79b3.up.railway.app/api/requisitos");
          

          const data = await res.json();

          if (data && res.ok) {
            setRequisitos(data);
            break;
          } else {
            throw new Error("Datos vacios o problemas en la respuesta");
          }
        } catch (error) {
          console.error(`Servidor en reposo: ${error.message}`);
          intento++;
          await new Promise((resolve) => setTimeout(resolve, 10000));
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
