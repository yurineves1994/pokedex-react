import * as S from './styles';

import ItemPokemon from '../ItemPokemon';

const ListPokemons = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <>
      {pokemons.length > 1 && <S.Header>{pokemons.length} Pokemons</S.Header>}
      <S.Content>
        {Object.prototype.toString.call(pokemons) === '[object Object]' && (
          <ItemPokemon
            image={pokemons.sprites.back_default}
            name={pokemons.name}
            idPokemon={pokemons.id}
          />
        )}
        {pokemons.length >= 2 &&
          pokemons.map((pokemon, index) => (
            <ItemPokemon
              key={index}
              image={pokemon.data.sprites.back_default}
              name={pokemon.data.name}
              idPokemon={index}
              typePokemon={pokemon.data.types[0].type.name}
            />
          ))}
      </S.Content>
    </>
  );
};

export default ListPokemons;
