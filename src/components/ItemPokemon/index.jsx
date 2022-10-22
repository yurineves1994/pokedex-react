import * as S from './styles';

import React from 'react';

const ItemPokemon = ({ name, idPokemon, image }) => {
  return (
    <S.Pokemon>
      <S.PokemonImage>
        <img src={image} alt="" />
      </S.PokemonImage>
      <S.PokemonBlock>
        <S.PokemonContent>
          <span>#{idPokemon + 1}</span>
          <strong>{name}</strong>
        </S.PokemonContent>
      </S.PokemonBlock>
    </S.Pokemon>
  );
};

export default ItemPokemon;
