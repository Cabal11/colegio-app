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

//Evitar duplicados
  const tipoMostrado = new Set();

  //Recorrer el json
  const datos = requisitos.map((requisitos, index) => {

    //Validar si existe o no en SET, verdadero si existe, falso si no existe
    const tipos = !tipoMostrado.has(requisitos.tipo);

    //Si no se agrego antes, se agrega a la lista
    if (tipos) {
      tipoMostrado.add(requisitos.tipo);
    }

//Recorre el array, si existe en el set, devuelve un false, por lo que no se agrega en el if y tampoco se renderiza
//Si no existe en el set, devuelve un true, por lo que se agrega luego en el if para que no se repita, y como es su primera aparicion
//Se renderiza el titulo, ya que tipos es verdadaero y el condicional && lo permite

    return (
      <div key={index} className={styles.containerRequisitos}>
        <section>
          {tipos && (<h2 className={styles.tituloMatricula}>
            Requisitos para {requisitos.tipo}
          </h2>)}
          <ul className={styles.textoRequisitos}>
            <li>{requisitos.requisito}</li>
          </ul>
        </section>
      </div>
    );

  });

  return <>{datos}</>;

}
