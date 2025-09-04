import styles from "@/app/styles/inicio.module.css";
export default function Section({ SinImagen = false, titulo, descripcion }) {
  
  const estilo = SinImagen ? `${styles.SinImagen}` : styles.seccion;
  
    return (
    <section className={estilo}>
      <div className={styles.texto_secciones}>
        <h2 className={styles.titulo}>
            {titulo}
            </h2>
        <p className={styles.descripcion}>
          {descripcion}
        </p>
      </div>
    </section>
  );

  
}
