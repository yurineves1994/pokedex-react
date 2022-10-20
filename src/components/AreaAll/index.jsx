import * as S from './styles';

// components
import ListTypes from '../ListTypes';
import ListPokemons from '../ListPokemons';

import { useAllPokemons, usePokemonsAllType } from '../../utils/config';

const AreaAll = () => {
  const { pokemons } = useAllPokemons();
  const { typesPokemon } = usePokemonsAllType();

  return (
    <S.Container>
      <S.LeftContainer>
        <ListTypes types={typesPokemon} />
      </S.LeftContainer>
      <S.RightContainer>
        <ListPokemons pokemons={pokemons} />
      </S.RightContainer>
    </S.Container>
  );
};

export default AreaAll;
