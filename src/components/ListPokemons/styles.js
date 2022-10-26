import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: 50px;

  span {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 150%;
    color: #4D5053;
  }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.2rem;
`;
