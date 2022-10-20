import * as S from './styles';

const ListTypes = ({ types }) => {
  return (
    <S.Container>
      <ul>
        {types.results &&
          types.results.map((type) => (
            <li key={type.name}>
              <a href="#">{type.name}</a>
            </li>
          ))}
      </ul>
    </S.Container>
  );
};

export default ListTypes;
