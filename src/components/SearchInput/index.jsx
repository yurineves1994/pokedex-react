import { useState } from 'react';
import * as S from './styles';

import { useContext } from 'react';
import { PokemonsContext } from '../../context/ContextPokemons/context';
import { pokemonForName } from '../../context/ContextPokemons/actions';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState();

  const { pokemonsDispatch } = useContext(PokemonsContext);

  const handleSearch = (searchValue, e) => {
    e.preventDefault();

    pokemonForName(searchValue, pokemonsDispatch);
  };

  return (
    <S.SeachContainer>
      <S.SeachTitle>Select your Pokémon</S.SeachTitle>
      <S.SeachInput onSubmit={(e) => handleSearch(searchValue, e)}>
        <input
          type="text"
          placeholder="Search name or code"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>Pesquisar</button>
      </S.SeachInput>
    </S.SeachContainer>
  );
};

export default SearchInput;
