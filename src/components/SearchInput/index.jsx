import * as S from './styles';

const SearchInput = () => {
  return (
    <S.SeachContainer>
      <S.SeachTitle>Select your Pokémon</S.SeachTitle>
      <S.SeachInput>
        <input type="text" placeholder="Search name or code" />
        <button>Pesquisar</button>
      </S.SeachInput>
    </S.SeachContainer>
  );
};

export default SearchInput;
