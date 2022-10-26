import { useState } from 'react';
import * as S from './styles';

const SearchInput = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState();

  return (
    <S.SeachContainer>
      <S.SeachTitle>Select your Pokémon</S.SeachTitle>
      <S.SeachInput onSubmit={(e) => handleSearch(searchValue, e)}>
        <input
          type="text"
          placeholder="Search name or code"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>Pesquisar</button>
      </S.SeachInput>
    </S.SeachContainer>
  );
};

export default SearchInput;
