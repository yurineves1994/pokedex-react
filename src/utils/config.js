import { useState, useEffect } from 'react';
import axios from 'axios';

const apiAllPokemon = import.meta.env.VITE_API_POKEMON;
const apiPokemonType = import.meta.env.VITE_API_TYPES;

export const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const endpoints = [];

  for (let i = 1; i < 100; i++) {
    endpoints.push(`${apiAllPokemon}${i}`);
  }

  const getData = () => {
    const res = Promise.all(
      endpoints.map((endpoint) => axios.get(endpoint)),
    ).then((res) => setPokemons(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return { pokemons };
};

export const usePokemonsAllType = () => {
  const [typesPokemon, setTypesPokemon] = useState([]);

  const getData = async () => {
    const res = axios
      .get(apiPokemonType)
      .then((res) => setTypesPokemon(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return { typesPokemon };
};
