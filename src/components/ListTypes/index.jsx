import * as S from './styles';

const ListTypes = ({ typesPokemon, handleGetForType }) => {
  return (
    <S.Container>
      <ul>
        {typesPokemon.results &&
          typesPokemon.results.map((type) => (
            <li key={type.name}>
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
