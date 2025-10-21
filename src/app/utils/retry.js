export async function retryFetch(url, intentos = 3, delay = 3000) {
  for (let i = 0; i < intentos; i++) {
    try {

      const noCookie = await GuardarToken();
      let res;

      //Consultar si tiene cookie
      if (noCookie) {
        //Si no tiene la toma del localStorage
        const token = localStorage.getItem("token");
        res = await fetch(url, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        //Validar si fue un 200
        if (!res.ok) {
          throw new Error("Solicitud de token fallida");
        }

        //Devolver los datos
        // const data = await res.json();
        // return data;
      } else {
        res = await fetch(url, {
          method: "GET",
          credentials: "include",
        });

        //Validar si fue un 200
        if (!res.ok) {
          throw new Error("Solicitud de cookie fallida");
        }
      }
      //Devolver los datos
      const data = await res.json();
      return data;
      break;
    } catch (err) {
      //Mensaje de error
      console.error(`Problema consultando el servidor ${err.message}`);
      console.log(`Intentos: ${i + 1}`);
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

async function SolicitarToken() {
  const res = await fetch("https://backend-nodejs-production-79b3.up.railway.app/getToken", {
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

async function ValidarCookie() {
  const res = await fetch("https://backend-nodejs-production-79b3.up.railway.app/verificar", {
    credentials: "include",
  });

  if (res.status === 401) {
    //Sin cookie
    return false;
  }
  return true;
}

async function GuardarToken() {
  const token = await SolicitarToken();
  const validCookie = await ValidarCookie();

  if (!validCookie) {
    localStorage.setItem("token", token);
    return true;
  }
  return false;
}
