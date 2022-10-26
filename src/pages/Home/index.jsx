import * as S from './styles';

import AreaAll from '../../components/AreaAll';
import SearchInput from '../../components/SearchInput';

import {
  useAllPokemons,
  usePokemonsAllType,
  usePokemonSearch,
} from '../../utils/config';

const Home = () => {
  const { pokemonsAll } = useAllPokemons();
  const { typesPokemon } = usePokemonsAllType();
  const { pokemonSearch, setUsePokemonsForSearch } = usePokemonSearch();

  return (
    <S.Container>
      <SearchInput handleSearch={setUsePokemonsForSearch} />
      {pokemonSearch ? (
        <AreaAll pokemonSearched={pokemonSearch} typesPokemon={typesPokemon} />
      ) : (
        <AreaAll pokemonsAll={pokemonsAll} typesPokemon={typesPokemon} />
      )}
    </S.Container>
  );
};

export default Home;
