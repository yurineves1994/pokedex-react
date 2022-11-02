import styled from 'styled-components';

export const Container = styled.ul`
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      opacity: 0.6;
      filter: grayscale(100%);
      border: 0;
      background-color: transparent;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 1.5rem 0;
      transition: all 0.3s;
      text-decoration: none;
      color: white;
    }
  }
  .normal {
    background-color: #563317;
  }
  .fighting {
    background-color: #C6AC01;
  } .flying {
    background-color: #75D3F5;
  } .poison {
    background-color: #741F7C;
  } .ground {
    background-color: #C5551D;
  } .rock {
    background-color: #BFBFC3;
  } .bug {
    background-color: #DD131B;
  } .ghost {
    background-color: #afafaf;
  } .steel {
    background-color: #88ADD0;
  } .fire {
    background-color: #e17e7e;
  } .water {
    background-color: #5884dc;
  } .grass {
    background-color: green;
  } .electric {
    background-color: #FEFF01;
  } .psychic {
    background-color: #044318;
  } .ice {
    background-color: #e7abab;
  } .dragon {
    background-color: #FC6D21;
  } .dark {
    background-color: #000000;
  } .fairy {
    background-color: #E32E6D;
  } .unknown {
    background-color: #afafafaf;
  } .shadow {
background-color: #000030;
  }
`;
