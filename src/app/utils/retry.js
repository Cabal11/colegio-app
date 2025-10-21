export async function retryFetch(url, intentos = 3, delay = 3000) {
  for (let i = 0; i < intentos; i++) {
    try {
      //Obtener token
      const res = await fetch("http://localhost:3000/getToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "frontend1K" }),
        credentials: "include",
      });

      const data = await res.json();

      return data.token;

      // //Validar si recibio el token
      // if (!resToken) {
      //   throw new Error("Problema con el token", resToken.json());
      // }

      // //Obtener los datos
      // const res = await fetch(url, {
      //   credentials: "include",
      //   method: "GET",
      // });

      // //Validar si esta autorizado
      // if (res.status === 401) {
      //   throw new Error("No autorizado");
      // }

      // //Validar si la respuesta fue un 200
      // if (!res.ok) {
      //   //Error y enviar al catch
      //   throw new Error("Problema al solicitar datos", res.json());
      // }

      // //Pasar los datos a json
      // const data = await res.json();
      // return data;
      // break;
    } catch (err) {
      //Mensaje de error
      console.error(`Problema consultando el servidor ${err.message}`);
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

async function SolcitarToken() {
  const res = await fetch("http://localhost:3000/getToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "frontend1K" }),
        credentials: "include",
      });

      const data = await res.json();

      return data.token;
}

async function validarCookie() {
  const res = await fetch("http://localhost:3000/verificar", {
    credentials: "include",
  });

  if (res.status === 401) {
    //Sin cookie
    return false;
  }
  return true;
}

async function guardarToken() {
  const token = await retryFetch(url);
  const validCookie = await validarCookie();

  if (!validCookie) {
    localStorage.setItem("token", token);
  }
}
