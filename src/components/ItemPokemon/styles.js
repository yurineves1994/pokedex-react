import styled from 'styled-components';

export const Pokemon = styled.div`
    position: relative;
    bottom: 0;
    max-width: 100%;
    height: 60vh;
    background-color: #ffffff;
    border: 0;
    box-shadow: 0px 10px 51px -5px rgb(183 189 193 / 30%);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    animation: fadeIn 0.3s forwards;

    &:hover {
      box-shadow: 0px 12px 40px -5px rgb(90 96 100 / 30%);
      bottom: 2px;
    }
`;

export const PokemonImage = styled.div`
    position: relative;
    width: 300px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 1.4rem;
    z-index: 2;

    img {
      max-width: 55%;
      max-height: 200px;
    }

    &::before {
      content: "";
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: absolute;
      z-index: -1;
      background-color: #D6EBDC;
    }
`;

export const PokemonBlock = styled.div`
    display: flex;
    padding: 0 25px;
    align-items: flex-end;
    justify-content: space-between;
`;

export const PokemonContent = styled.div`
    span {
      display: block;
      text-align: left;
      font-weight: 500;
      font-size: 1rem;
      line-height: 150%;
      color: #7A7D80;
      margin-bottom: 0.6rem;
    }

    strong {
      font-weight: 600;
      font-size: 1.3rem;
      line-height: 150%;
      color: #2F3133;
    }
`;
