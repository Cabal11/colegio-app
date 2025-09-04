import React from "react";
import "@/app/styles/Navbar.css"
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <img className="img-nav" alt="Icono" src="/foto1.png" />
      <nav className="nav-bar">
        
        <ol className="nav-items">
          <li className="nav-Inicio">
            <Link href="/">Inicio</Link>
          </li>
          <li className="nav-Matricula">
            <Link href="/Matricula">Matricula</Link>
          </li>
          <li className="nav-Vida">
            <Link href="/Vida_Estudiantil">Vida estudiantil</Link>
          </li>
          <li className="nav-Contacto">
            <Link href="/Contacto">Contacto</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
