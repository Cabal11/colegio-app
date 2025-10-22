"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          className={styles["img-nav"]}
          alt="Icono colegio"
          src="/Nuevo_logo.webp"
        />
      </Link>

      {/* Boton responsive */}
      <button
        title="menu-responsive"
        className={styles["menu-cambiar"]}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? (
          <FaTimes style={{ color: "black" }} />
        ) : (
          <FaBars style={{ color: "white" }} />
        )}
      </button>
      {/* Validar si es un menu para PC, tablets o moviles */}
      <nav
        className={`${styles["nav-bar"]} ${menuAbierto ? styles.abierto : ""}`}
      >
        <ol className={styles["nav-items"]}>
          <li className={styles["nav-Inicio"]}>
            <Link href="/" onClick={cerrarMenu}>
              <span>Inicio</span>
            </Link>
          </li>
          <li className={styles["nav-Matricula"]} onClick={cerrarMenu}>
            <Link href="/matricula">
              <span>Matrícula</span>
            </Link>
          </li>
          <li className={styles["nav-Vida"]} onClick={cerrarMenu}>
            <Link href="/vida-estudiantil">
              <span>Vida estudiantil</span>
            </Link>
          </li>
          <li className={styles["nav-Contacto"]} onClick={cerrarMenu}>
            <Link href="/contacto">
              <span>Contacto</span>
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
