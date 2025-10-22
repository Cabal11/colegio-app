export async function retryFetch(url, intentos = 3, delay = 3000) {
  //Bucle para obtener los datos, por si el servidor esta en reposo o tardando en activarse
  for (let i = 0; i < intentos; i++) {
    try {
      //Validacion sobre si tiene o no el navegador la cookie
      const noCookie = await GuardarToken();
      let res;

      //Validar si tiene o no, para realizar una consulta diferente ya sea con cookie o con el header
      if (noCookie) {
        //Si no tiene la toma del localStorage
        const token = localStorage.getItem("token");

        //Envia token desde el header
        res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        //Validar si fue un 200
        if (!res.ok) {
          throw new Error("Solicitud de token fallida");
        }
      } else {
        //Consulta los datos usando la cookie
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
  //Obtiene el token y la cookie
  const res = await fetch(
    "https://backend-nodejs-production-79b3.up.railway.app/getToken",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "frontend1K" }),
      credentials: "include",
    }
  );

  //Transforma el token en json, y devuelve el token
  const data = await res.json();

  return data.token;
}

async function ValidarCookie() {
  //Verifica si tiene la cookie
  const res = await fetch(
    "https://backend-nodejs-production-79b3.up.railway.app/verificar",
    {
      credentials: "include",
    }
  );

  //Si es una 401 significa que no la tiene, navegador de Safari o algun otro problema
  if (res.status === 401) {
    //Sin cookie
    return false;
  }
  return true;
}

async function GuardarToken() {
  //Obtiene el token y valida si existe una cookie
  const token = await SolicitarToken();
  const validCookie = await ValidarCookie();

  //Si el navegador no tiene la cookie, guarda el token en el localStorage
  //Devuelve falso en caso de tener la cookie
  if (!validCookie) {
    localStorage.setItem("token", token);
    return true;
  }
  return false;
}
