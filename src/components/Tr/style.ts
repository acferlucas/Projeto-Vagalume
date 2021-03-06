import styled from 'styled-components';

export const MainTr = styled.tr`
  height: 5rem;

  td {
    background-color: #fff;
    font-size:16px;
    font-weight: 400;
    color: #363F5F;
    text-align: left;
    padding: 0 4rem;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
  }

  

  button {
    height: 2.6rem;
    width: 15rem;
    background-color: #4A4B4C;
    color: #fff;
    border: none;
    font-size: 18px;
    border-radius:8px;
    transition: 0.3s;
  }

  button:hover {
    background-color: #707070;
  }

`;
