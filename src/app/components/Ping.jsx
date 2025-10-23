"use client";
import React, { useEffect } from "react";

export default function Ping() {
  useEffect(() => {
    async function activarServidor() {
      try {
        //Enviar solicitud para encender el servidor y BD
        const res = await fetch(
          "https://backend-nodejs-production-79b3.up.railway.app/ping"
        );

        //Validar si esta o no en reposo
        if (!res.ok) {
          console.log("Servidor y BD en reposo");
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
