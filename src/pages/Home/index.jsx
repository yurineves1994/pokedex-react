import * as S from './styles';

import AreaAll from '../../components/AreaAll';
import SearchInput from '../../components/SearchInput';

const Home = () => {
  return (
    <S.Container>
      <SearchInput />
      <AreaAll />;
    </S.Container>
  );
};

export default Home;
