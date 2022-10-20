import { useState, useEffect } from 'react';

const apiAllPokemon = import.meta.env.VITE_API_POKEMON;
const apiPokemonType = import.meta.env.VITE_API_TYPES;

export const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(apiAllPokemon)
        .then((res) => res.json())
        .catch((e) => console.log(e));

      setPokemons(req);
    };

    getData();
  }, []);

  return { pokemons };
};

export const usePokemonsAllType = () => {
  const [typesPokemon, setTypesPokemon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(apiPokemonType)
        .then((res) => res.json())
        .catch((e) => console.log(e));

      setTypesPokemon(req);
    };

    getData();
  }, []);

  return { typesPokemon };
};
