import * as S from './styles';

import ItemPokemon from '../ItemPokemon';

const ListPokemons = ({ pokemons }) => {
  return (
    <>
      <S.Header>{pokemons.length} Pokemons</S.Header>
      <S.Content>
        {pokemons &&
          pokemons.map((pokemon, index) => (
            <ItemPokemon key={index} name={pokemon.name} idPokemon={index} />
          ))}
      </S.Content>
      <S.Button>Carregar mais</S.Button>
    </>
  );
};

export default ListPokemons;
