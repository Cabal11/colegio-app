export async function reintentoFetch(
  url,
  opciones,
  maxIntentos,
  delay
) {
  for (let intentos = 1; intentos < maxIntentos; intentos++) {
    try {
      // const res = await fetch("http://localhost:3000/api/cronograma");
      // const res = await fetch("https://backend-nodejs-production-79b3.up.railway.app/api/cronograma", {next: {revalidate: 480}});
      const res = await fetch(url, opciones);

      if (!res.ok) {
        throw new Error(`Problemas al conectar: ${res.status}`);
      }

      const data = await res.json();

      if (!data || data.length === 0) {
        throw new Error("Datos vacios");
      }

      return data;
    } catch (error) {
      console.error(
        "Problemas al obtener la informacion en el servidor:",
        error
      );
      if (intentos < maxIntentos) {
        //Esperar unos segundos antes de volver a intentarlo
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        //Devuelve null si se acaban los intentos
        return null;
      }
    }
  }
}
