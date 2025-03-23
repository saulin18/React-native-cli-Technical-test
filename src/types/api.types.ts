export interface Character {
    nombre: string;
    altura: string;
    peso: string;
    color_cabello: string;
    color_piel: string;
    color_ojos: string;
    anio_nacimiento: string;
    genero: string;
    mundo_natal: string;
    peliculas: string[];
    especies: string[];
    vehiculos: string[];
    naves_estelares: string[];
    creado: string;
    editado: string;
    url: string;
  }
  
  export interface Film {
    titulo: string;
    episodio_id: number;
    texto_apertura: string;
    director: string;
    productor: string;
    fecha_lanzamiento: string;
    personajes: string[];
    planetas: string[];
    naves_estelares: string[];
    vehiculos: string[];
    especies: string[];
    creado: string;
    editado: string;
    url: string;
  }
  
  export interface Planet {
    nombre: string;
    periodo_rotacion: string;
    periodo_orbital: string;
    diametro: string;
    clima: string;
    gravedad: string;
    terreno: string;
    agua_superficial: string;
    poblacion: string;
    residentes: string[];
    peliculas: string[];
    creado: string;
    editado: string;
    url: string;
  }
  
  export interface APIResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  }