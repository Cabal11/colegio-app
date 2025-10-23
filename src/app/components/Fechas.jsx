import styles from "../styles/Modulos/inicio.module.css";

//Arrays de meses
const meses = [
  {
    mes: "Enero",
    dias: [
      "1 Año Nuevo",
      "6 Día de Reyes",
      "24 Día Mundial de la Cultura Africana y Afrodescendientes",
      "31 Día de la Poesía Nacional",
    ],
  },
  {
    mes: "Febrero",
    dias: [
      "14 Día de San Valentín",
      "Miércoles de Ceniza (inicio de Cuaresma)",
      "21 Día de la Batalla de Coto",
    ],
  },
  {
    mes: "Marzo",
    dias: [
      "8 Día Internacional de la Mujer",
      "Jueves y Viernes Santo",
      "20 Batalla de Santa Rosa",
    ],
  },
  {
    mes: "Abril",
    dias: [
      "8 Día de Francisca “Pancha” Carrasco, heroína nacional",
      "11 Batalla de Rivas (Día de Juan Santamaría)",
      "19 Día de la Persona Indígena Costarricense",
      "22 Día de la Tierra",
    ],
  },
  {
    mes: "Mayo",
    dias: [
      "1 Día del Trabajo",
      "15 Día del Agricultor",
      "29 Día Nacional de las Personas con Discapacidad",
    ],
  },
  {
    mes: "Junio",
    dias: [
      "Tercer domingo Día del Padre",
      "5 Día Mundial del Medio Ambiente",
      "15 Día del Árbol",
    ],
  },
  {
    mes: "Julio",
    dias: ["25 Anexión del Partido de Nicoya"],
  },
  {
    mes: "Agosto",
    dias: [
      "2 Día de la Virgen de los Ángeles",
      "15 Día de la Madre",
      "24 Día de los Parques Nacionales",
      "31 Día de la Persona Negra y la Cultura Afrocostarricense",
    ],
  },
  {
    mes: "Septiembre",
    dias: [
      "1 Día Nacional de la Libertad de Expresión",
      "9 Día del Niño y la Niña",
      "14 Llegada de la Antorcha de la Independencia y Desfile de Faroles",
      "15 Día de la Independencia",
      "21 Día Internacional de la Paz",
    ],
  },
  {
    mes: "Octubre",
    dias: [
      "12 Día de las Culturas",
      "31 Día de la Mascarada Tradicional Costarricense y Hallowen",
    ],
  },
  {
    mes: "Noviembre",
    dias: ["2 Día de los Difuntos", "22 Día del Maestro"],
  },
  {
    mes: "Diciembre",
    dias: [
      "1 Día de la Abolición del Ejército",
      "24 Nochebuena",
      "25 Navidad",
      "31 Noche Vieja",
    ],
  },
];

export default function fechas() {

  //Obtener fecha actual
  var mesActual = new Date().toLocaleDateString("es-ES", { month: "long" });

  //Buscar el mes del array y si coincide con el actual
  var mesEncontrado = meses.find(
    (m) => m.mes.toLowerCase() === mesActual.toLowerCase()
  );

  //Validar si encontro el mes
  const mes = mesEncontrado?.mes ?? "Mes no encotrado";

  //Validar si el mes encontrado tiene dias especiales
  const diasEspeciales = mesEncontrado?.dias ?? [];


  return (
    <section className={styles.containerDiasEspeciales}>
      <p className={styles.textoMes}>Mes: {mes}</p>
      <ul>
        {/* Recorrer el array de dias especiales segun el mes encontrado */}
        {diasEspeciales.map((dias, index) => (
          <li key={index}>{dias}</li>
        ))}
      </ul>
    </section>
  );
}
