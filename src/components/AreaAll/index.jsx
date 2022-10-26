import * as S from './styles';

// components
import ListTypes from '../ListTypes';
import ListPokemons from '../ListPokemons';

import { usePokemonsForType } from '../../utils/config';

const AreaAll = ({ pokemonsAll, typesPokemon, pokemonSearched }) => {
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
        {!pokemonSearched && pokemonsType ? (
          <ListPokemons pokemons={pokemonsType} pokemonSearch />
        ) : (
          ''
        )}
        {!pokemonSearched && !pokemonsType ? (
          <ListPokemons pokemons={pokemonsAll} />
        ) : (
          ''
        )}
        {pokemonSearched && (
          <ListPokemons pokemons={null} pokemonSearch={pokemonSearched} />
        )}
      </S.RightContainer>
    </S.Container>
  );
};

export default AreaAll;
