import styles from "../styles/Modulos/matricula.module.css";
import Requisitos from "./components/requisitos";
import Cronograma from "./components/cronograma";

export default function Matricula() {
  return (
    <main className={styles.container}>

      <h1 className={styles.titulo}>Requisitos de matrícula</h1>

      <Requisitos />

      <h2 className={styles.titulo}>Información adicional</h2>
      <p className={styles.parrafo}>
        Informacion ademas obre el uniforme de fisica y un titulo mas
      </p>
      
      <h2 className={styles.titulo}>Periodos de matrícula</h2>

      <Cronograma />

    </main>
  );
}
