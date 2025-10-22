import styles from "../styles/Modulos/matricula.module.css";
import Requisitos from "./components/requisitos";
import Cronograma from "./components/cronograma";

export default function Matricula() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Requisitos de matrícula</h1>

      {/* Seccion de los requisitos y su componente que los muestra*/}
      <div className={styles.containerCard}>
        <Requisitos />
      </div>

      {/* Seccion sobre el uniforme de educacion fisica */}
      <h2 className={styles.titulo}>Información adicional</h2>
      <div className={styles.cardInfoAdd}>
        <h3 className={styles.subtitulo}>Uniforme de educación física</h3>
        <p className={styles.parrafoInfoAdd}>
          La camiseta oficial del colegio y el uniforme de Educación Física se
          podrán adquirir en la cooperativa de la institución: “Coopenosara” (en
          el periodo de matrícula {Anio()}).
        </p>
      </div>

      {/* Seccion de los periodos de matricula y su componente que los muestra */}
      <h2 className={styles.titulo}>Periodos de matrícula</h2>

      <Cronograma />
    </main>
  );
}

//Funcion para validar que en diciembre, el uniforme de educacion fisica sume un año
//Despues en enero toma el presente año
function Anio() {
  const anioActual = new Date().getFullYear();
  const mesActual = new Date().getMonth();

  if (mesActual === 11) {
    return anioActual + 1;
  }

  return anioActual;
}
