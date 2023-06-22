import data from './data.js';
import peliculas from './data/ghibli/ghibli.js';// Se importa la data de studio ghibli


const botonVolverPrincipal = document.getElementById("principal");// Se declara la variable botonVolverPrincipal, y se llama al elemento del DOM por su Id.
if (botonVolverPrincipal !== null) {
    botonVolverPrincipal.addEventListener("click", paginaPrincipal);// Se crea un evento al dar click se dirige a la funcion pagina principal
    window.addEventListener("load", mostrarPeliculas(peliculas.films));// Se agrega el evento escucha para que cuando se cargue la pagina films se muestren las cards
}

function paginaPrincipal() {
    location.href = "index.html";// Se agrega a la funcion principal la localizacion para direccionar 
}

function mostrarPeliculas(peliculas) {
    let carSeccion = document.querySelector(".cards");// Se usa querySelector para encontrar la primera coincidencia de cards
    let cards = "";
    let colorFondo = 1;
    peliculas.forEach(pelicula => {// Se recorre el array que contien las peliculas pormedio de forEach
        let card = '<article class="card">';// declara la variable card y se le asigna una etiqueta article como texto
        card += '<picture class="thumbnail">';// a la variable card se le concatena etiqueta picture
        card += '<img class="category__' + colorFondo++ + '" src="' + pelicula.poster + '" alt="" />';
        card += '</picture>';
        card += '<div class="card-content">';
        card += '<p class="category category__' + colorFondo + '">' + pelicula.title + '</p><br><br>';
        card += '<p>' + pelicula.description + '</p>';
        card += '</div><!-- .card-content -->';
        card += '<footer>';
        card += '<div class="post-meta">';
        card += '<span class="timestamp"><i class="fa fa-clock-o"></i>Score: ' + pelicula.rt_score + '</span>';
        card += '<span class="comments"><i class="fa fa-comments"></i>Año: ' + pelicula.release_date + '</span>';
        card += '<span class="comments"><i class="fa fa-comments"></i>Productor: ' + pelicula.producer + '</span>';
        card += '<span class="comments"><i class="fa fa-comments"></i>Director: ' + pelicula.director + '</span>';
        card += '</div>';
        card += '</footer>';
        card += '</article>';
        //console.log("esto hace el forEach en card: "+card);
        cards += card;
    });
    carSeccion.innerHTML = cards;
}