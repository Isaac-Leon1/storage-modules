// Guardar un elemento en el localStorage
fetch("https://jsonplaceholder.typicode.com/posts/7") // Realizar una solicitud HTTP GET a la API
  .then(response => response.json()) // Convertir la respuesta a JSON
  .then(post => {
    // Almacenar el JSON convertido en localStorage con la clave "post7"
    localStorage.setItem("post7", JSON.stringify(post));
    // Imprimir el JSON en la consola
    console.log(`El JSON obtenido es: ${JSON.stringify(post)}`);})
  // En caso de errores en alguna de las promesas
  .catch(error => console.log(`Ocurrió un error: ${error}`));

// Obtener un elemento del localStorage
// Recuperar la cadena JSON del localStorage accediendo con la clave "post7"
let post = JSON.parse(localStorage.getItem("post7")); //Convertir la cadena a un objeto JavaScript
// Imprimir el objeto JavaScript en la consola
console.log(post);
