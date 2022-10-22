import * as S from './styles';

const ListTypes = ({ typesPokemon }) => {
  return (
    <S.Container>
      <ul>
        {typesPokemon.results &&
          typesPokemon.results.map((type) => (
            <li key={type.name}>
              <a href="#">{type.name}</a>
            </li>
          ))}
      </ul>
    </S.Container>
  );
};

export default ListTypes;
