import * as S from './styles';

import { useContext, useEffect } from 'react';
import { PokemonsContext } from '../../context/ContextPokemons/context';
import { pokemonsForType } from '../../context/ContextPokemons/actions';

const ListTypes = ({ types }) => {
  const { pokemonsDispatch } = useContext(PokemonsContext);

  const handleGetForType = (url, e) => {
    e.preventDefault();

    pokemonsForType(url, pokemonsDispatch);
  };
  return (
    <S.Container>
      <ul>
        {types.data &&
          types.data.results.map((type) => (
            <li className={type.name} key={type.name}>
              <a
                href={type.url}
                onClick={(e) => handleGetForType(e.target.href, e)}
              >
                {type.name}
              </a>
            </li>
          ))}
      </ul>
    </S.Container>
  );
};

export default ListTypes;
