"use client";
import React, { useEffect } from "react";

export default function Ping() {
  return useEffect(async () => {
    try {
      const res = await fetch(
        "https://backend-nodejs-production-79b3.up.railway.app/ping"
      );
      if (!res.ok) {
        console.log("Servidor en reposo");
      }
      console.log("Activo");
    } catch (err) {
        console.error('Problema con ping:', err.message)
    }
  }, []);

  return null;
}
