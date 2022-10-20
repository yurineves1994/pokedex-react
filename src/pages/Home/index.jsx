import * as S from './styles';

import AreaAll from '../../components/AreaAll';
import SearchInput from '../../components/SearchInput';

import { useAllPokemons, usePokemonsAllType } from '../../utils/config';

const Home = () => {
  const { pokemons } = useAllPokemons();
  const { typesPokemon } = usePokemonsAllType();

  return (
    <S.Container>
      <SearchInput />
      <AreaAll pokemons={pokemons} types={typesPokemon} />;
    </S.Container>
  );
};

export default Home;
