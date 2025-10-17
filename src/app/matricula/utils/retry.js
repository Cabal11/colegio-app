export async function retryFetch(url, intentos = 5, delay = 3000) {
  for (let i = 0; i < intentos; i++) {
    try {
      //Obtener los datos
      const res = await fetch(url);

      //Validar si la respuesta fue un 200
      if (!res.ok) {
        //Error y enviar al catch
        throw new error("Problema con el servidor");
      }

      //Pasar los datos a json
      const data = await res.json();
      return data;
    } catch (error) {
      //Mensaje de error
      console.error(`Problemas en la solicitud ${error}`);
      console.log(`Intentos: ${intentos}`);
      if (i < intentos - 1) {
        //Espera 3 segundos, para que el servidor se active y volver a repetir
        await new Promise((r) => setTimeout(r, delay));
      } else {
        //Se acabaron los intentos
        throw error("Expiro el tiempo de consulta");
      }
    }
  }
}
