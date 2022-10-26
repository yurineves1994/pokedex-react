import * as S from './styles';

import ItemPokemon from '../ItemPokemon';

const ListPokemons = ({ pokemons = [], pokemonSearch = null }) => {
  console.log(pokemons);
  console.log(pokemonSearch);
  return (
    <>
      {pokemonSearch == null && <S.Header>{pokemons.length} Pokemons</S.Header>}
      <S.Content>
        {pokemons && pokemonSearch === null ? (
          pokemons.map((pokemon, index) => (
            <ItemPokemon
              key={index}
              image={pokemon.data.sprites.back_default}
              name={pokemon.data.name}
              idPokemon={index}
            />
          ))
        ) : (
          <ItemPokemon
            image={pokemonSearch.sprites.back_default}
            name={pokemonSearch.name}
            idPokemon={pokemonSearch.id}
          />
        )}
      </S.Content>
    </>
  );
};

export default ListPokemons;
