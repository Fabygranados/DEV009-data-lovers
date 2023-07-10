const data = {

  paginaPrincipal() {
    window.location.href = "index.html";// Se agrega a la funcion principal la localizacion para direccionar 
  },

  paginaCuriosidades() {
    window.location.href = "curiosidades.html";// Se agrega a la funcion curiosidades la localizacion para direccionar 
  },

  paginaVolverFilms() {
    window.location.href = "animacionesGhibli.html";// Se agrega a la funcion volverFilms la localizacion para direccionar 
  },

  OrdenaPeliculasAz(arrayPeliculas) {
    const peliculasOrdenadas = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas igual al arreglo peliculas, se aplica el metodo sort y se le pasa una funcion que contiene los parametros a y b
      return a.title.localeCompare(b.title);// regresa el resultado de comparar el titulo a con el titulo b, localeCompare ordena alfabeticamente en el ciclo
    });
    return peliculasOrdenadas;
  },

  OrdenaPeliculasZa(arrayPeliculas) {
    const peliculasOrdenadasZa = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadasZa igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return b.title.localeCompare(a.title);// regresa el resultado de comparar el titulo b con el titulo a, localeCompare ordena Za en el ciclo
    });
    return peliculasOrdenadasZa;
  },

  OrdenaPeliculasAñoReciente(arrayPeliculas) {
    const peliculasOrdenadasAñoReciente = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas año reciente igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return b.release_date - a.release_date;// regresa el resultado de comparar el titulo b menos con el titulo a, con esta estructura se ordenan los numeros del año mas reciente al mas antiguo en el ciclo
    });
    return peliculasOrdenadasAñoReciente;
  },

  OrdenaPeliculasAñoViejo(arrayPeliculas) {
    const peliculasOrdenadasAñoViejo = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas año viejo igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return a.release_date - b.release_date;// regresa el resultado de comparar el titulo a menos con el titulo b, con esta estructura se ordenan los numeros del año mas antiguo al mas reciente en el ciclo
    });
    return peliculasOrdenadasAñoViejo;
  },

  OrdenaPeliculasScoreAlto(arrayPeliculas) {
    const peliculasOrdenadasScoreAlto = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas score alto igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return b.rt_score - a.rt_score;// regresa el resultado de comparar el titulo b menos con el titulo a, con esta estructura se ordenan los numeros del score mas alto al mas bajo en el ciclo
    });
    return peliculasOrdenadasScoreAlto;
  },

  OrdenaPeliculasScoreBajo(arrayPeliculas) {
    const peliculasOrdenadasScoreBajo = arrayPeliculas.sort((a, b) => {// Declaramos variable peliculas ordenadas score bajo igual al arreglopeliculas se aplica el metodo sort y se le pasa una funcion que contien los parametros a y b
      return a.rt_score - b.rt_score;// regresa el resultado de comparar el titulo a menos con el titulo b, con esta estructura se ordenan los numeros del año mas antiguo al mas reciente en el ciclo
    });
    return peliculasOrdenadasScoreBajo;
  },

  //Por medio de filter se filtran las peliculas por productor
  //con el if si el nombre del productor es producers regresa el arreglo completo, sino regresa el arreglo filtrado
  OrdenaPeliculasProductor(arrayPeliculas, nombreProductor) {
    const resultadoProductor = arrayPeliculas.filter(pelicula => pelicula.producer === nombreProductor);
    if (nombreProductor === "Producers") {
      return arrayPeliculas;
    } else {
      return resultadoProductor;
    }
  },
  //Por medio de filter se filtran las peliculas por director
  //con el if si el nombre del director es directors regresa el arreglo completo, sino regresa el arreglo filtrado
  OrdenaPeliculasDirector(arrayPeliculas, nombreDirector) {
    const resultadoDirector = arrayPeliculas.filter(pelicula => pelicula.director === nombreDirector);
    if (nombreDirector === "Directors") {
      return arrayPeliculas;
    } else {
      return resultadoDirector;
    }
  },

}
export default data;//se exportando todos los datos para la clase que los importe



