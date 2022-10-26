import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
    flex: 1;
    max-width: 23.9rem;
    border-right: 1px solid #EFF3F6;
    padding-top: 7rem;
    padding-bottom: 10rem;
`;

export const RightContainer = styled.div`
    flex: 1;
    padding-top: 100px;
    padding-left: 50px;
    padding-bottom: 20px;
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
