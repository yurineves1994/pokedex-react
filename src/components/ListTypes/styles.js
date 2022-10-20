import styled from 'styled-components';

export const Container = styled.ul`
  li {
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
    }
  }
`;
