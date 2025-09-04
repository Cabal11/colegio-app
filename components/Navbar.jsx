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
            <Link href="/matricula">Matricula</Link>
          </li>
          <li className="nav-Vida">
            <Link href="/vida-estudiantil">Vida estudiantil</Link>
          </li>
          <li className="nav-Contacto">
            <Link href="/contacto">Contacto</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
