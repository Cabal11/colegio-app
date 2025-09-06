import React from "react";
import "../styles/Contacto.css";

export default function Contacto() {
  return (
    <main>
      <h1 className="titulo">Contáctenos</h1>
      <div className="container">
        <section className="tarjeta">
          <div className="texto">
            <h1>Facebook</h1>
            <p>Informacion</p>
            {/*Poner etique a para redirigir a facebook*/}
          </div>
        </section>

        <section className="tarjeta">
          <div className="texto">
            <h1>Correo</h1>
            <p>Informacion</p>
            {/*Buscar como redirigir a gmail para mandar el correo*/}
          </div>
        </section>

        <section className="tarjeta">
          <div className="texto">
            <h1>Teléfono</h1>
            <p>Informacion</p>
            {/**acordarse del telefono fijo bueno */}
          </div>
        </section>

        <section className="tarjeta">
          <div className="texto">
            <h1>Dirección</h1>
            <p>Informacion</p>
          </div>
        </section>
      </div>
    </main>
  );
}
