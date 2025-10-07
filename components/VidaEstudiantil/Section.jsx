import React from "react";
import styles from "@/app/styles/vidaEstudiantil.module.css";

export default async function Section() {
  let secciones = [];
  try {
    //Consulta a la API
    console.log("Llamando a la API")
    // const res = await fetch("https://backend-nodejs-production-79b3.up.railway.app/api/seccion");
    const res = await fetch("http://localhost:3000/api/seccion", {next: {revalidate: 8700}});
    // const res = await fetch("https://backend-nodejs-production-79b3.up.railway.app/api/seccion", {cache: 'no-store'});
    // const res = await fetch("https://backend-nodejs-production-79b3.up.railway.app/api/seccion", {next: {revalidate: 10}});

    //Si no devuelve un 200
    if (!res.ok) {
      throw new Error(`Problemas al conectar: ${res.status}`);
    }
    //Obtiene los datos
    secciones = await res.json();
  } catch (error) {
    console.error("Problemas al obtener las secciones:", error);
    // Puedes asignar datos de respaldo o dejar el arreglo vacío
    secciones = null;
  }

  if (!secciones || secciones.length === 0) {
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
