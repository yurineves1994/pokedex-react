import * as S from './styles';

// components
import ListTypes from '../ListTypes';
import ListPokemons from '../ListPokemons';

const AreaAll = ({ pokemons, types }) => {
  return (
    <S.Container>
      <S.LeftContainer>
        <ListTypes types={types} />
      </S.LeftContainer>
      <S.RightContainer>
        <ListPokemons pokemons={pokemons} />
      </S.RightContainer>
    </S.Container>
  );
};

export default AreaAll;
