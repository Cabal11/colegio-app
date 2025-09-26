"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/styles/Navbar.css";
import Link from "next/link";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => {
    setMenuAbierto(false);
  }

  return (
    <header>
      <Link href="/">
      <img className="img-nav" alt="Icono colegio" src="/Logo_Colegio.webp" />
      </Link>
      
      <button
        className="menu-cambiar"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <FaTimes style={{color: 'black'}} /> : <FaBars style={{color: 'black'}} />}
      </button>
      <nav className={`nav-bar ${menuAbierto ? 'abierto' : ''}`}>
        <ol className="nav-items">
          <li className="nav-Inicio">
            <Link href="/" onClick={cerrarMenu}>Inicio</Link>
          </li>
          <li className="nav-Matricula">
            <Link href="/matricula" onClick={cerrarMenu}>Matricula</Link>
          </li>
          <li className="nav-Vida">
            <Link href="/vida-estudiantil" onClick={cerrarMenu}>Vida estudiantil</Link>
          </li>
          <li className="nav-Contacto">
            <Link href="/contacto" onClick={cerrarMenu}>Contacto</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
