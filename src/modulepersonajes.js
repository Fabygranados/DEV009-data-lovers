
import ghibli from "./data/ghibli/ghibli.js";//importacion de archivo donde encontramos los datos

const selectMovie = document.querySelectorAll('button');//donde seleccionara el usuario que pelicula quiere para dezplegar los personajes
const peopleElement = document.querySelector('#people'); //Donde se va escribir la informacion que se trae desde los datos

if (selectMovie !== null & peopleElement !== null) {//verifica que las dos variables esten vacias para ejecutar 
  selectMovie.forEach(button =>{//para mostrar cada elemento del arreglo sin utilizar un bucle como for
    button.addEventListener('click', (event) =>{//algo con cada click y se obtiene el valor del boton seleccionado 
      const selectMovieValue = event.target.value;

      let movieTitle ="";
      let movieCharacters = [];
      let numberCharacters = "";

      switch (selectMovieValue) {//toma decisiones en diferentes opciones, permite comparar una expresion con varios casos y ejecutar el codigo que se asocia al caso
      case "0":
        movieTitle = (ghibli.films[0].title);//titulo de la pelicula
        movieCharacters = ghibli.films[0].people;//despliegue de los personajes
        numberCharacters = ghibli.films[0].people.length;//numero de personajes que se encuentran en la pelicula
        break;
      case "1":
        movieTitle = (ghibli.films[1].title);
        movieCharacters = ghibli.films[1].people;
        numberCharacters = ghibli.films[1].people.length;
        break;
      case "2":
        movieTitle = (ghibli.films[2].title);
        movieCharacters = ghibli.films[2].people;
        numberCharacters = ghibli.films[2].people.length;
        break;
      case "7":
        movieTitle = (ghibli.films[7].title);
        movieCharacters = ghibli.films[7].people;
        numberCharacters = ghibli.films[7].people.length;
        break;
      case "6":
        movieTitle = (ghibli.films[6].title);
        movieCharacters = ghibli.films[6].people;
        numberCharacters = ghibli.films[6].people.length;
        break;
      case "5":
        movieTitle = (ghibli.films[5].title);
        movieCharacters = ghibli.films[5].people;
        numberCharacters = ghibli.films[5].people.length;
        break;
      default:
        movieTitle = "";
        movieCharacters = [];
      }     
      const charactersList = createCharactersList(movieCharacters);   
      const html = movieTitle ? "<h2>" + movieTitle + "<br> This movie has <strong>" + numberCharacters + "</strong> characters</br></h2>" + charactersList :"Selecciona una pelicula ";
      // Se utiliza ? como operador tenerio, sustituye el if else en una sola linea. a la derecha del ? esa la sentencia verdadera y despues de : esta la falsa
      peopleElement.innerHTML = html;
    });
  });
}
function createCharactersList(characters) {
  if (characters.length === 0) {
    return "<p>No se encontraron personajes para esta película.</p>";
  }//en caso de que la pelicula no tenga personajes para mostrar, se dara este mensaje

  let charactersListHTML = '<div class="name-image">';// se desplegan las tarjetas con esta estuctura 
  characters.forEach(function(character) {
    charactersListHTML += '<div class="contenedor"> <h3>' + character.name + ' (' + character.gender + ')</h3>' +
              '<ul>' +'<img src=' + character.img + '/>' +
                  '<li>Age: ' + character.age + '</li>' +
                  '<li>Hair Color: ' + character.hair_color + '</li>' +
                  '<li>Specie: ' + character.specie + '</li>' +
              '</ul>'+'</div>';
  });
  charactersListHTML += '</div>';
        
  return charactersListHTML;
}
