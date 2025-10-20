export async function retryFetch(url, intentos = 3, delay = 3000) {
  for (let i = 0; i < intentos; i++) {
    try {
      //Obtener token
      const resToken = await fetch("https://backend-nodejs-production-79b3.up.railway.app/getToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: process.env.NEXT_PUBLIC_NAME_KEY }),
        credentials: "include",
      });

      //Validar si recibio el token
      if (!resToken) {
        throw new Error("Problema con el servidor");
      }

      //Obtener los datos
      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      //Validar si esta autorizado
      if (res.status === 401) {
        throw new Error("No autorizado");
      }

      //Validar si la respuesta fue un 200
      if (!res.ok) {
        //Error y enviar al catch
        throw new Error("Problema con el servidor");
      }

      //Pasar los datos a json
      const data = await res.json();
      return data;
    } catch (err) {
      //Mensaje de error
      console.error(`Problemas en la solicitud ${err}`);
      console.log(`Intentos: ${i}`);
      if (i < intentos - 1) {
        //Espera 3 segundos, para que el servidor se active y volver a repetir
        await new Promise((r) => setTimeout(r, delay));
      } else {
        //Se acabaron los intentos
        throw Error("Expiro el tiempo de consulta");
      }
    }
  }
}
