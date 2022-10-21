import * as S from './styles';

// components
import ListTypes from '../ListTypes';
import ListPokemons from '../ListPokemons';

const AreaAll = ({ pokemons, typesPokemon }) => {
  console.log(pokemons, typesPokemon);
  return (
    <S.Container>
      <S.LeftContainer>
        {typesPokemon && <ListTypes types={typesPokemon} />}
      </S.LeftContainer>
      <S.RightContainer>
        {pokemons && <ListPokemons pokemons={pokemons} />}
      </S.RightContainer>
    </S.Container>
  );
};

export default AreaAll;
