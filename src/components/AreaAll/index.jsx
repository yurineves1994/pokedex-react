import * as S from './styles';
import axios from 'axios';

// components
import ListTypes from '../ListTypes';
import ListPokemons from '../ListPokemons';
import { useState } from 'react';

import { usePokemonsForType } from '../../utils/config';

const AreaAll = ({ pokemons, typesPokemon }) => {
  const { pokemonsType, setUsePokemonsForType } = usePokemonsForType();

  return (
    <S.Container>
      <S.LeftContainer>
        <ListTypes
          typesPokemon={typesPokemon}
          handleGetForType={setUsePokemonsForType}
        />
      </S.LeftContainer>
      <S.RightContainer>
        {pokemonsType && <ListPokemons pokemons={pokemonsType} />}
        {!pokemonsType && <ListPokemons pokemons={pokemons} />}
      </S.RightContainer>
    </S.Container>
  );
};

export default AreaAll;
