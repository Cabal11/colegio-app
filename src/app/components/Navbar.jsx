"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/styles/Navbar.css";
import Link from "next/link";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header>
      <Link href="/">
        <img className="img-nav" alt="Icono colegio" src="/Nuevo_logo.webp" />
      </Link>

      <button
        title="menu-responsive"
        className="menu-cambiar"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? (
          <FaTimes style={{ color: "black" }} />
        ) : (
          <FaBars style={{ color: "black" }} />
        )}
      </button>
      <nav className={`nav-bar ${menuAbierto ? "abierto" : ""}`}>
        <ol className="nav-items">
          <li className="nav-Inicio">
            <Link href="/">
              <span onClick={cerrarMenu}>Inicio</span>
            </Link>
          </li>
          <li className="nav-Matricula">
            <Link href="/matricula">
              <span onClick={cerrarMenu}>Matrícula</span>
            </Link>
          </li>
          <li className="nav-Vida">
            <Link href="/vida-estudiantil">
              <span onClick={cerrarMenu}>Vida estudiantil</span>
            </Link>
          </li>
          <li className="nav-Contacto">
            <Link href="/contacto">
              <span onClick={cerrarMenu}>Contacto</span>
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
