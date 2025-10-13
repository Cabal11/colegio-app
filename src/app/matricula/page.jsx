import styles from "../styles/Modulos/matricula.module.css";
import Requisitos from "./components/requisitos";
import Cronograma from "./components/cronograma";

export default function Matricula() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Requisitos de matrícula</h1>

      {/* Meter container a requisitos componente por si acaso */}
      <div className={styles.containerCard}>
        <Requisitos />
      </div>

      <h2 className={styles.titulo}>Información adicional</h2>
      <div className={styles.cardInfoAdd}>
        <h3 className={styles.subtitulo}>Uniforme de educación física</h3>
        <p className={styles.parrafoInfoAdd}>
          La camiseta oficial del colegio y el uniforme de Educación Física se
          podrán adquirir en la cooperativa de la institución: “Coopenosara” (en
          el periodo de matrícula 2025).
        </p>
      </div>

      <h2 className={styles.titulo}>Periodos de matrícula</h2>

      <Cronograma />
    </main>
  );
}
