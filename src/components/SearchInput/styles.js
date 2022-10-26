import styled from 'styled-components';

export const SeachContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SeachTitle = styled.h2`
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 3.9rem;
    letter-spacing: -0.01em;
    color: #2F3133;
`;

export const SeachInput = styled.form`
  display: flex;
  flex: 1;
  max-width: 400px;
  background-color: #FFFFFF;
  border: 1px solid #afafaf;

  input {
    flex: 1;
    border: 0;
    font-size: 1em;
    line-height: 150%;
    text-align: center;
    color: #A0AFBA;
    outline: none;
  }
  button {
    padding: 20px 50px;
    background-color: rgba(158, 185, 225, 0.1);
    border: 1px solid #E1E9EF;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
  }
`;
