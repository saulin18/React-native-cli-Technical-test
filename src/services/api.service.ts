import axios from 'axios';
import { APIResponse, Character, Film, Planet } from '../types/api.types';

const BASE_URL = 'https://swapi.py4e.com/api';

const translateCharacter = (character: any): Character => ({
  nombre: character.name,
  altura: character.height,
  peso: character.mass,
  color_cabello: character.hair_color,
  color_piel: character.skin_color,
  color_ojos: character.eye_color,
  anio_nacimiento: character.birth_year,
  genero: character.gender,
  mundo_natal: character.homeworld,
  peliculas: character.films,
  especies: character.species,
  vehiculos: character.vehicles,
  naves_estelares: character.starships,
  creado: character.created,
  editado: character.edited,
  url: character.url,
});

const translateFilm = (film: any): Film => ({
  titulo: film.title,
  episodio_id: film.episode_id,
  texto_apertura: film.opening_crawl,
  director: film.director,
  productor: film.producer,
  fecha_lanzamiento: film.release_date,
  personajes: film.characters,
  planetas: film.planets,
  naves_estelares: film.starships,
  vehiculos: film.vehicles,
  especies: film.species,
  creado: film.created,
  editado: film.edited,
  url: film.url,
});

const translatePlanet = (planet: any): Planet => ({
  nombre: planet.name,
  periodo_rotacion: planet.rotation_period,
  periodo_orbital: planet.orbital_period,
  diametro: planet.diameter,
  clima: planet.climate,
  gravedad: planet.gravity,
  terreno: planet.terrain,
  agua_superficial: planet.surface_water,
  poblacion: planet.population,
  residentes: planet.residents,
  peliculas: planet.films,
  creado: planet.created,
  editado: planet.edited,
  url: planet.url,
});
export const api = {
  async getCharacters(page = 1): Promise<APIResponse<Character>> {
    const response = await axios.get(`${BASE_URL}/people/?page=${page}`);
    return {
      ...response.data,
      results: response.data.results.map(translateCharacter),
    };
  },

  async searchCharacters(query: string, pageParam: number): Promise<APIResponse<Character>> {
    const response = await axios.get(
      `${BASE_URL}/people/?search=${query}&page=${pageParam}`
    );
    return {
      ...response.data,
      results: response.data.results.map(translateCharacter),
    };
  },

  async getPlanets(page = 1): Promise<APIResponse<Planet>> {
    const response = await axios.get(`${BASE_URL}/planets/?page=${page}`);
    return {
      ...response.data,
      results: response.data.results.map(translatePlanet),
    };
  },

  async getFilms(page = 1): Promise<APIResponse<Film>> {
    const response = await axios.get(`${BASE_URL}/films/?page=${page}`);
    return {
      ...response.data,
      results: response.data.results.map(translateFilm),
    };
  },

  async getCharacterDetail(CharacterId: number): Promise<Character> {
    const response = await axios.get(`${BASE_URL}/people/${CharacterId}`);
    return translateCharacter(response.data);
  },
  }
