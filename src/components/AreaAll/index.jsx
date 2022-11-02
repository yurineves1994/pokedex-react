import * as S from './styles';

// components
import ListTypes from '../ListTypes';
import ListPokemons from '../ListPokemons';

import { useContext, useEffect } from 'react';
import { PokemonsContext } from '../../context/ContextPokemons/context';
import { allPokemonsAndAllTypes } from '../../context/ContextPokemons/actions';

const AreaAll = () => {
  const { pokemons, typesPokemons, pokemonsDispatch } =
    useContext(PokemonsContext);

  useEffect(() => {
    allPokemonsAndAllTypes(pokemonsDispatch);
  }, [pokemonsDispatch]);

  const handleReset = () => {
    allPokemonsAndAllTypes(pokemonsDispatch);
  };
  return (
    <S.Container>
      <S.LeftContainer>
        <ListTypes types={typesPokemons} />
      </S.LeftContainer>
      <S.RightContainer>
        <ListPokemons pokemons={pokemons} />
        <S.Button onClick={handleReset}>Voltar</S.Button>
      </S.RightContainer>
    </S.Container>
  );
};

export default AreaAll;
