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

export const Button = styled.a`
    border: 0;
    background-color: rgba(63,93,179,0.1);
    width: 19.6rem;
    line-height: 4.5rem;
    display: block;
    margin: 0 auto;
    margin-top: 6.8rem;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
    letter-spacing: -0.01em;
    color: #3F5DB3;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
`;
