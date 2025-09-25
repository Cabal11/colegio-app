import React from "react";
import Section from "../../../components/VidaEstudiantil/Section";
import styles from "@/app/styles/vidaEstudiantil.module.css";

export default function VidaEstudiantil() {
  return (
    <div>
      <h1 className={styles.titulo}>Vida estudiantil</h1>

      {/* Cada Section recibe el parametro de la siguiente manera:
      url: Recibe la ruta de la imagen que esta en la carpeta public
      titulo: Es el nombre del titulo que se le va a dar a la seccion
      descripcion: Todo sobre la informacion sobre la seccion que va a dar
      invertido: se usa "true" si quiere que la imagen aparezca del lado derecho
      se usa "false" o no hace el llamado de invertido para que la imagen este a la izquierda */}

      <Section
        urlImagen={"/foto1.png"}
        titulo={"Banda"}
        descripcion={"Una banda con muchas formas de tocar"}
      />

      <Section
        invertido={true}
        urlImagen={"/foto1.png"}
        titulo={"Deportes"}
        descripcion={"Los mejores campeonatos en un solo lugar"}
      />

      <Section
        urlImagen={"/foto1.png"}
        titulo={"Actos"}
        descripcion={"Todo lo bonito de las actividades festivas"}
      />

      <Section
        invertido={true}
        urlImagen={"/foto1.png"}
        titulo={"Zonas verdes"}
        descripcion={"Lugares para que descansen se pongan a jugar al monopoly"}
      />

      <Section
        urlImagen={"/foto1.png"}
        titulo={"Biblioteca"}
        descripcion={
          "Los libros mas actualizados sobre ciencia, agricultura y muchas cosas mas"
        }
      />
    </div>
  );
}
