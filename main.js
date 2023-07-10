import data from './data.js';//se importa la data de data.js
import peliculas from './data/ghibli/ghibli.js';// Se importa la data de studio ghibli

const botonCuriosidades = document.getElementById("curiosidades");//declara una constante llamada botonCuriosidades y la asigna al elemento HTML que tiene el ID "curiosidades"
if (botonCuriosidades !== null) {//verifica si botonCuriosidades no es null. Esto se hace para asegurarse de que se encontró un elemento con el ID "curiosidades" en el HTML. 
  botonCuriosidades.addEventListener("click", data.paginaCuriosidades);//asignamos un evento de clic a un elemento HTML con el ID "curiosidades"
}

const botonVolverPrincipal = document.getElementById("principal");// Se declara la variable botonVolverPrincipal, y se llama al elemento del DOM por su Id.
if (botonVolverPrincipal !== null) {//verifica si botonVolverPrincipal no es null. Esto se hace para asegurarse de que se encontró un elemento con el ID "principal" en el HTML. 
  botonVolverPrincipal.addEventListener("click", data.paginaPrincipal);// Se crea un evento al dar click se dirige a la funcion pagina principal
  window.addEventListener("load", mostrarPeliculas(peliculas.films));// Se agrega el evento escucha para que cuando se cargue la pagina films se muestren las cards
}

const botonVolverFilms = document.getElementById("volverFilms");//Se declara una constante llamada botonVolverFilms y se le asigna el elemento del documento con el ID "volverFilms". 
if (botonVolverFilms !== null) {//verifica si botonVolverFilms no es null. Esto se hace para asegurarse de que se encontró un elemento con el ID "volverFilms" en el HTML. 
  botonVolverFilms.addEventListener("click", data.paginaVolverFilms);//asignamos un evento de clic a un elemento HTML con el ID "volverFilms"
}


const selectElement = document.querySelector('#ordenaPor');//Se crea una constante y se le asigna el elemento que se obtiene con queryselector, en este caso el id del select
if (selectElement !== null) {//Se verifica si selectElement no es null, si el elemento con el id "ordenarPor" existe en el documento, el codigo dentro del bloque if se ejecutará
  selectElement.addEventListener('change', (event) => {// A la constante se le agrega un elemento, que cuando cambia crea un evento
    const opcionSeleccionada = event.target.value;// Se declara una constante y le asigna el valor del elemento selecionado por el usuario, event.target se refiere al elemento en el que se produjo el elemento, el select
    let peliculasOrdenadas;//Se declara una variable peliculasOrdenadas sin asignarle ningun valor
    switch (opcionSeleccionada) {//Se una estructura de control switch para realizar diferentes acciones segun el valor de opcionSeleccionada.
    case "0":// Dependiendo del valor seleccionado se asigna a peliculasOrdenadas, el resultado de llamar a diferentes funciones de ordenacion de peliculas.
      peliculasOrdenadas = peliculas.films.slice();
      break;
    case "1":
      peliculasOrdenadas = data.OrdenaPeliculasAz(peliculas.films.slice());
      break;
    case "2":
      peliculasOrdenadas = data.OrdenaPeliculasZa(peliculas.films.slice());
      break;
    case "3":
      peliculasOrdenadas = data.OrdenaPeliculasAñoReciente(peliculas.films.slice());
      break;
    case "4":
      peliculasOrdenadas = data.OrdenaPeliculasAñoViejo(peliculas.films.slice());
      break;
    case "5":
      peliculasOrdenadas = data.OrdenaPeliculasScoreAlto(peliculas.films.slice());
      break;
    case "6":
      peliculasOrdenadas = data.OrdenaPeliculasScoreBajo(peliculas.films.slice());
      break;
    }
    mostrarPeliculas(peliculasOrdenadas);// Se llama a la funcion mostrarPeliculas pasando como argumento peliculasOrdenadas y se encargara de mostrar las peliculas ordenadas segun la opcion seleccionada por el usuario.
  });
}

const selectProductor = document.querySelector('#Producers');//Se crea una constante y se le asigna el elemento que se obtiene con queryselector del html con el id "prodicers" y lo asigna a la constante selectProductor.
if (selectProductor !== null) {//Se verifica si selectProductor no es null, si el elemento con el id "Producers" existe en el documento, el codigo dentro del bloque if se ejecutará
  selectProductor.addEventListener('change', (event) => {// A la constante se le agrega un elemento, que cuando cambia crea un evento
    const opcionSeleccionada = event.target.value;// Se declara una constante y le asigna el valor de la opcion seleccionada por el usuario, event.target se refiere al elemento en el que se produjo el evento.
    const peliculasProductor = data.OrdenaPeliculasProductor(peliculas.films, opcionSeleccionada);
    //Se declara una constante llamada peliculasProductor y se le asigna el resultado de llamar data.ordenaPeliculasProductor, pasando como argumento el array peliculas.films y la opcion seleccionada y ordena las peliculas segun el productor seleccionado.
    mostrarPeliculas(peliculasProductor);
  });//Se llama a la funcion mostrar peliculas, pasando como argumento el valor de peliculasProductor y muestra las peliculas segun el productor seleccionado.
}


const selectDirector = document.querySelector('#Directors');//Se crea una constante y se le asigna el elemento que se obtiene con queryselector
if (selectDirector !== null) {//Se verifica si selectDirector no es null, si el elemento con el id "Directors" existe en el documento, el codigo dentro del bloque if se ejecutará
  selectDirector.addEventListener('change', (event) => {// A la constante se le agrega un elemento, que cuando cambia crea un evento
    const opcionSeleccionada = event.target.value;// Se declara una constante y le asigna el valor de la opcion sleccionada por el usuario, event.target se refiere al elemento en el que se produjo el evento.
    const peliculasDirector = data.OrdenaPeliculasDirector(peliculas.films, opcionSeleccionada);
    //Se declara una constante llamada peliculasDirector y se le asigna el resultado de llamar data.ordenaPeliculasDirector, pasando como argumento el array peliculas.films y la opcion seleccionada y ordena las peliculas segun el director seleccionado.
    mostrarPeliculas(peliculasDirector);
  });//Se llama a la funcion mostrar peliculas, pasando como argumento el valor de peliculasDirector y muestra las peliculas segun el director seleccionado.
}

function mostrarPeliculas(peliculas) {
  const carSeccion = document.querySelector(".cards");// Se usa querySelector para encontrar la primera coincidencia de cards
  let cards = "";//se inicializan dos variables: "cards" que almacenará el código HTML de todas las tarjetas de películas, y "colorFondo" que se utilizará para asignar clases de colores a las imágenes de las tarjetas.
  let colorFondo = 1;
  peliculas.forEach(pelicula => {//Se utiliza un bucle "forEach" para recorrer cada película en el arreglo de películas. Dentro del bucle, se construye el código HTML de una tarjeta de película utilizando concatenación de cadenas.
    let card = '<article class="card">';// declara la variable card y se le asigna una etiqueta article como texto
    card += '<picture class="imagen">';// a la variable card se le concatena etiqueta picture
    card += '<img class="category__' + colorFondo++ + '" src="' + pelicula.poster + '" alt="" />';
    card += '</picture>';
    card += '<div class="card-content">';//se encuentra un contenedor de contenido de tarjeta con la clase "card-content". Dentro de este contenedor, hay dos párrafos: uno con la clase "category" que muestra el título de la película obtenido de la propiedad "title", y otro con la clase "description" que muestra la descripción de la película obtenida de la propiedad "description".
    card += '<p class="category category__' + colorFondo + '">' + pelicula.title + '</p><br><br>';
    card += '<p class="description">' + pelicula.description + '</p>';
    card += '</div><!-- .card-content -->';
    card += '<footer>';//Sigue el pie de página de la tarjeta con la etiqueta "footer". Dentro del pie de página, hay un contenedor de metadatos de publicación con la clase "post-meta". Dentro de este contenedor, se muestran varios elementos "span" que contienen información de la película, como el puntaje ("rt_score"), el año de lanzamiento ("release_date"), el productor ("producer") y el director ("director").
    card += '<div class="post-meta">';
    card += '<span>Score: ' + pelicula.rt_score + '</span><br>';
    card += '<span>Año: ' + pelicula.release_date + '</span><br>';
    card += '<span>Productor: ' + pelicula.producer + '</span><br>';
    card += '<span>Director: ' + pelicula.director + '</span><br>';
    card += '</div>';//•	Al finalizar el bucle, la variable cards contendrá todo el código HTML de las tarjetas de películas.
    card += '</footer>';
    card += '</article>';
    //console.log("esto hace el forEach en card: "+card);
    cards += card;//Se concatena una tarjeta a la lista de tarjetas, hasta concatenar todas.
  });
  carSeccion.innerHTML = cards;//•	Por último, se asigna el contenido HTML de la variable cards al elemento representado por carSeccion, lo que hará que las tarjetas de películas se muestren en el documento HTML.
}
