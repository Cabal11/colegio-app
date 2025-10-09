import styles from "../styles/Modulos/matricula.module.css";

export default function Matricula() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Requisitos de matrícula</h1>
      <ul className={styles.textoRequisitos}>
        <li>Matricula 1</li>
        <li>Matricula 2</li>
        <li>Matricula 3</li>
        <li>Matricula 4</li>
        <li>Matricula 5</li>
      </ul>
      <h2 className={styles.titulo}>Información adicional</h2>
      <p className={styles.parrafo}>Informacion ademas</p>
      <h3 className={styles.titulo}>Periodos de matrícula</h3>
      <p className={styles.parrafo}>Fechas de la matricula</p>
    </main>
  );
}
