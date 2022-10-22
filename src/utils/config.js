import { useState, useEffect } from 'react';
import axios from 'axios';

const apiAllPokemon = import.meta.env.VITE_API_POKEMON;
const apiPokemonType = import.meta.env.VITE_API_TYPES;

export const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const endpoints = [];

  for (let i = 1; i < 50; i++) {
    endpoints.push(`${apiAllPokemon}${i}`);
  }

  const getData = () => {
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  }, []);

  return { pokemons };
};

export const usePokemonsAllType = () => {
  const [typesPokemon, setTypesPokemon] = useState([]);

  const getData = async () => {
    axios.get(apiPokemonType).then((res) => setTypesPokemon(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return { typesPokemon };
};

export const usePokemonsForType = () => {
  const [pokemonsType, setPokemonsType] = useState();

  async function setUsePokemonsForType(urlType, e) {
    e.preventDefault();
    const res = await fetch(urlType);
    let pokemonsForType = await res.json();

    const endpoints = [];

    pokemonsForType.pokemon.forEach((element) => {
      endpoints.push(element.pokemon.url);
    });

    pokemonsForType = await Promise.all(
      endpoints.map((endpoint) => axios.get(endpoint)),
    )
      .then((res) => setPokemonsType(res))
      .catch((e) => console.log(e));
  }

  return { pokemonsType, setUsePokemonsForType };
};
