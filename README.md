# storage-modules
<h2>
  <i>
    A. Fundamentos API
  </i>
</h2>


<h2>
  <i>
    B. Local Storage
  </i>
</h2>
<hr>
<strong>
2.	Guardar un objeto en localStorage
</strong>
<p align="center">
  Código fuente en: <i>localStorage-save-and-get-objects.js</i> <br>
</p>
Guardar información en el localStorage permite mantener la información incluso si el navegador o la pestaña de cierra,
aquí hay un ejemplo de como guardar un objeto (que representa información) en el localStorage.
<div align="center">
  <img 
    src="https://github.com/Isaac-Leon1/storage-modules/assets/150528715/644e7409-85bf-45b0-a442-411577bdbe90" 
    alt="Fig. Guardar un JSON en el localStorage" 
    style="margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Guardar un JSON en el localStorage
  </i>
</div>
<p>
  En el ejemplo usamos los datos obtenidos por la API de <i>JSONPlaceHolder</i> para obtener un objeto JSON del recurso <i>posts</i>
  usando el metodo <code>fetch()</code> y el uso de promesas para manejar codigo asincrono, una vez obtenidos los datos se los convierte a JSON
  y se procede a guardar el resultado en el <i>localStorage</i> usando el metodo <code>setItem()</code> con la clave <i>"post7"</i>
</p>
<strong>
  3.	Obtener un objeto en localStorage
</strong>
<p align="center">
  Código fuente en: <i>localStorage-save-and-get-objects.js</i> <br>
</p>
Obtener información del localStorage es vital para el sitio web, no solo basta con guardarla, sino, también en usarla en <br>
validaciones u otros temas que se requiera, a continuación, se muestra como acceder al elemento con clave <i>"post7"</i>, mismo que se guardó previamente.
<div align="center">
  <img 
    src="https://github.com/Isaac-Leon1/storage-modules/assets/150528715/ec67718f-1458-45b8-8c1d-85baab713d46" 
    alt="Fig. Obtener un elemento del localStorage" 
    style="margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Obtener un elemento del localStorage
  </i>
</div>

<h2>
  <i>
    C. Modules
  </i>
</h2>
<p>
  En este caso se usa el metodo <code>getItem()</code> para obtener un elemento del <i>localStorage</i>, lo que se obtendra será el elemento con clave <i>“post7”</i> del localStorage,
  como el valor que se espera obtener es un JSON, se hace uso de <code>JSON.parse()</code> para convertir la cadena JSON recibido en un formato JSON valido <br>
  y se imprime el resultado en consola.
</p>
