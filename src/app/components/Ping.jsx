"use client";
import React, { useEffect } from "react";

export default function Ping() {
  useEffect(() => {
    async function activarServidor() {
      try {
        const res = await fetch(
          "/ping"
        );
        if (!res.ok) {
          console.log("Servidor en reposo");
        }
        console.log("Activo");
      } catch (err) {
        console.error("Problema con ping:", err.message);
      }
    }

    activarServidor();
  }, []);

  return null;
}
