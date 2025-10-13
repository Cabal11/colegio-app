import React from "react";
import styles from "@/app/styles/Modulos/matricula.module.css";

export default async function requisitos() {
  let requisitos = [];
  let req = null;

  try {
    const res = await fetch("http://localhost:3000/api/requisitos");

    if (!res.ok) {
      throw new Error(`Problemas al conectar: ${res.status}`);
    }

    requisitos = await res.json();
  } catch (error) {
    console.error("Problemas al obtener la informacion en el servidor:", error);
    // Se puede asignar datos de respaldo o dejar el arreglo vacío
    requisitos = null;
  }

  if (!requisitos || requisitos.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>
          No se pudieron cargar las requisitos. Vuelve a intentar más tarde.
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
  const secciones = Object.entries(requisitosPorTipo).map(([tipo, reqs], index) => (
    <section className={styles.cardTipos} key={index}>
      <h2 className={styles.subtitulo}>Requisitos {tipo}</h2>
      <ul className={styles.textoRequisitos}>
        {reqs.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>
    </section>
  ));

  return <section className={styles.containerRequisitos}>{secciones}</section>;
}
