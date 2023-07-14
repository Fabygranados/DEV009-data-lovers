/**
 * @jest-environment jsdom
 */
// importamos el objeto 'data', que contiene las funciones
import data from '../src/data.js';
describe('data', () => {
  describe('data.paginaPrincipal', () => {
    it('deberia regresar a la pagina principal', () => {
      const mockLocation = { href: 'index.html' };
      Object.defineProperty(window, 'location', { value: mockLocation });
      data.paginaPrincipal();
      expect(window.location.href).toBe('index.html');
    });
  });
});

describe('data', () => {
  describe('data.paginaCuriosidades', () => {
    it('deberia ir a la pagina curiosidades', () => {
      const mockLocation = { href: 'curiosidades.html' };
      Object.defineProperty(window, 'location', { value: mockLocation });
      data.paginaCuriosidades();
      expect(window.location.href).toBe('curiosidades.html');
    });
  });
});

describe('data', () => {
  describe('data.paginaVolverFilms', () => {
    it('deberia regresar a la pagina de films', () => {
      const mockLocation = { href: 'animacionesGhibli.html' };
      Object.defineProperty(window, 'location', { value: mockLocation });
      data.paginaVolverFilms();
      expect(window.location.href).toBe('animacionesGhibli.html');
    });
  });
});

describe('data', () => {
  describe('data.OrdenaPeliculasAz', () => {
    it('debería ordenar las peliculas de la A-Z', () => {
      const actual = [
        { title: "My Neighbor Totoro" },
        { title: "Castle in the Sky" },
        { title: "Princess Mononoke" },
      ];
      const expected = [
        { title: "Castle in the Sky" },
        { title: "My Neighbor Totoro" },
        { title: "Princess Mononoke" },
      ];
      expect(data.OrdenaPeliculasAz(actual, '1', 0)).toEqual(expected);
    });
  });
});

describe('data', () => {
  describe('data.OrdenaPeliculasZa', () => {
    it('debería ordenar las peliculas de la Z-A', () => {
      const actual = [
        { title: "My Neighbor Totoro" },
        { title: "Castle in the Sky" },
        { title: "Princess Mononoke" },
      ];
      const expected = [
        { title: "Princess Mononoke" },
        { title: "My Neighbor Totoro" },
        { title: "Castle in the Sky" },
      ];
      expect(data.OrdenaPeliculasZa(actual, '2', 0)).toEqual(expected);
    });
  });
});

describe('data', () => {
  describe('data.OrdenaPeliculasAñoReciente', () => {
    it('debería ordenar las peliculas por año del mas reciente al mas viejo', () => {
      const actual = [
        { release_date: "2008" },
        { release_date: "2013" },
        { release_date: "2002" },
      ];
      const expected = [
        { release_date: "2013" },
        { release_date: "2008" },
        { release_date: "2002" },

      ];
      expect(data.OrdenaPeliculasAñoReciente(actual, '3', 0)).toEqual(expected);
    });
  });
});

describe('data', () => {
  describe('data.OrdenaPeliculasAñoViejo', () => {
    it('debería ordenar las peliculas por año del mas viejo al mas reciente', () => {
      const actual = [
        { release_date: "2008" },
        { release_date: "2013" },
        { release_date: "2002" },
      ];
      const expected = [
        { release_date: "2002" },
        { release_date: "2008" },
        { release_date: "2013" },

      ];
      expect(data.OrdenaPeliculasAñoViejo(actual, '4', 0)).toEqual(expected);
    });
  });
});


describe('data', () => {
  describe('data.OrdenaPeliculasScoreAlto', () => {
    it('debería ordenar las peliculas por Score del mas alto al bajo', () => {
      const actual = [
        { rt_score: "78" },
        { rt_score: "100" },
        { rt_score: "75" },
      ];
      const expected = [
        { rt_score: "100" },
        { rt_score: "78" },
        { rt_score: "75" },
      ];
      expect(data.OrdenaPeliculasScoreAlto(actual, '5', 0)).toEqual(expected);
    });
  });
});


describe('data', () => {
  describe('data.OrdenaPeliculasScoreBajo', () => {
    it('debería ordenar las peliculas por Score del mas bajo al alto', () => {
      const actual = [
        { rt_score: "78" },
        { rt_score: "100" },
        { rt_score: "75" },
      ];
      const expected = [
        { rt_score: "75" },
        { rt_score: "78" },
        { rt_score: "100" },


      ];
      expect(data.OrdenaPeliculasScoreBajo(actual, '6', 0)).toEqual(expected);
    });
  });
});

describe('data', () => {
  describe('data.OrdenaPeliculasProductor', () => {
    it('debería retornar todas las peliculas del productor especificado', () => {
      const arrayPeliculas = [
        { producer: "Hayao Miyazaki", title: "My Neighbor Totoro" },
        { producer: "Hayao Miyazaki", title: "Kiki's Delivery Service" },
        { producer: "Isao Takahata", title: "Castle in the Sky" },
      ];

      const expected = [
        { producer: "Hayao Miyazaki", title: "My Neighbor Totoro" },
        { producer: "Hayao Miyazaki", title: "Kiki's Delivery Service" }
      ];

      const resultado = data.OrdenaPeliculasProductor(arrayPeliculas, "Hayao Miyazaki");
      expect(resultado).toEqual(expected);
    });

    it('debería retornar las peliculas en su orden original', () => {
      const arrayPeliculas = [
        { producer: "Hayao Miyazaki", title: "My Neighbor Totoro" },
        { producer: "Hayao Miyazaki", title: "Kiki's Delivery Service" },
      ];

      const resultado = data.OrdenaPeliculasProductor(arrayPeliculas, "Producers");
      expect(arrayPeliculas).toEqual(resultado);
    });
  });
});

describe('data', () => {
  describe('data.OrdenaPeliculasDirector', () => {
    it('debería retornar todas las peliculas del director especificado ', () => {
      const arrayPeliculas = [
        { director: "Hiroyuki Morita", title: "The Cat Returns" },
        { director: "Hiromasa Yonebayashi", title: "The Secret World of Arrietty" },
        { director: "Hiromasa Yonebayashi", title: "When Marnie Was There" },
      ];

      const expected = [
        { director: "Hiromasa Yonebayashi", title: "The Secret World of Arrietty" },
        { director: "Hiromasa Yonebayashi", title: "When Marnie Was There" },
      ];

      const resultado = data.OrdenaPeliculasDirector(arrayPeliculas, "Hiromasa Yonebayashi");
      expect(resultado).toEqual(expected);
    });

    it('debería retornar las peliculas en su orden original', () => {
      const arrayPeliculas = [
        { director: "Hiromasa Yonebayashi", title: "The Secret World of Arrietty" },
        { director: "Hiromasa Yonebayashi", title: "When Marnie Was There" },
      ];

      const resultado = data.OrdenaPeliculasDirector(arrayPeliculas, "Directors");
      expect(arrayPeliculas).toEqual(resultado);
    });
  });
});

