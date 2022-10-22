import * as S from './styles';

// components
import ListTypes from '../ListTypes';
import ListPokemons from '../ListPokemons';

const AreaAll = ({ pokemons, typesPokemon }) => {
  console.log(typesPokemon);
  return (
    <S.Container>
      <S.LeftContainer>
        <ListTypes typesPokemon={typesPokemon} />
      </S.LeftContainer>
      <S.RightContainer>
        <ListPokemons pokemons={pokemons} />
      </S.RightContainer>
    </S.Container>
  );
};

export default AreaAll;
