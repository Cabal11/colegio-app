import React from "react";
import styles from "@/app/styles/inicio.module.css";
import Section from "../../components/Inicio/Section";

export default function Inicio() {
  return (
    <div className={styles.contenido}>
      <h1 className={styles.titulo}>Colegio Bocas de Nosara</h1>
      <h2 className={styles.subtitulo}>Fechas importantes</h2>
      <p className={styles.descripcion}>Descripcion</p>

      <Section
        titulo={"Matrícula"}
        descripcion={
          "Requisitos sobre la matrícula y detalles sobre el proceso"
        }
        imagenFondo={"https://scontent.fsjo10-1.fna.fbcdn.net/v/t39.30808-6/506714957_709723805256036_5335524730929835369_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MT2k31vKcaIQ7kNvwEXlZ8T&_nc_oc=Adn6Lz16RGPyCV_TrpsJVV0LsOu3hEbfwrChQxrYfMX6zMSgVS1PMz7xe35PDpi7Gnk&_nc_zt=23&_nc_ht=scontent.fsjo10-1.fna&_nc_gid=_my0l6XTMFE3zlfplQPIsw&oh=00_AfZi8IiBT38TX4jk0spHGemwnq_EHwMnaI9pLUioLoncrg&oe=68D5522B"}
      />

      <Section
        titulo={"Vida estudiantil"}
        descripcion={"Conoce el entorno que rodea a nuestros estudiantes"}
        imagenFondo={"https://scontent.fsjo10-1.fna.fbcdn.net/v/t39.30808-6/476633392_612410438320707_8816713794019783727_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=JFe5HxZ7R_8Q7kNvwGYxByf&_nc_oc=AdmDTzMbWMJV9D8xNUsPjAmk76KAhCZemF4DIyHWoeKZYWTF2LCBVGAdQ5kwT90KfKg&_nc_zt=23&_nc_ht=scontent.fsjo10-1.fna&_nc_gid=Qdp09L7G8c_MxpkWvZuPjg&oh=00_AfYo_l10BWUR0adcu1J-jukpKUjYoOb5eY4y5vDUmoU-mQ&oe=68D54504"}
      />

      <Section
      SinImagen={true}
        titulo={"Calidad académica"}
        descripcion={"Enseñando compromiso y buenos valores a los estudiantes"}
      />
    </div>
  );
}
