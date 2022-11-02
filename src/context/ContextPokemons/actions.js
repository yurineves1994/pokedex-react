import * as types from './types';

import axios from 'axios';

const apiAllPokemon = import.meta.env.VITE_API_POKEMON;
const apiPokemonType = import.meta.env.VITE_API_TYPES;

export const allPokemonsAndAllTypes = async (dispatch) => {
  dispatch({ type: types.POST_LOADING });
  const endpoints = [];

  for (let i = 1; i < 200; i++) {
    endpoints.push(`${apiAllPokemon}${i}`);
  }

  Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => dispatch({ type: types.GET_POKEMONS, payload: res }))
    .catch((e) => console.log(e));

  dispatch({ type: types.POST_LOADING });

  axios
    .get(apiPokemonType)
    .then((res) => dispatch({ type: types.ALL_TYPES, payload: res }));
};

export const pokemonForName = async (searchName, dispatch) => {
  dispatch({ type: types.POST_LOADING });

  const res = await fetch(`${apiAllPokemon}${searchName}`);
  let pokemonForSearch = await res.json();

  dispatch({ type: types.GET_POKEMONS, payload: pokemonForSearch });
};

export const pokemonsForId = async (id, dispatch) => {
  dispatch({ type: types.POST_LOADING });

  const res = await fetch(`${apiAllPokemon}${id}`);
  let pokemonForSearch = await res.json();

  dispatch({ type: types.GET_POKEMONS, payload: pokemonForSearch });
};

export const pokemonsForType = async (urlType, dispatch) => {
  dispatch({ type: types.POST_LOADING });

  const res = await fetch(urlType);
  let pokemonsForType = await res.json();

  const endpoints = [];

  pokemonsForType.pokemon.forEach((element) => {
    endpoints.push(element.pokemon.url);
  });

  pokemonsForType = await Promise.all(
    endpoints.map((endpoint) => axios.get(endpoint)),
  )
    .then((res) => dispatch({ type: types.GET_POKEMONS, payload: res }))
    .catch((e) => console.log(e));
};
