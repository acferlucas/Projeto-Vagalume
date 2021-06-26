import styled from 'styled-components';

export const Container = styled.div`
  width: 10%;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 2.0625rem 2.375rem;
  background-color: #4A4B4C;

  img {
    max-width:9.375rem;
  }
  div {
    
    margin: 2.8125rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }
  svg {
    cursor: pointer;
  }
`;
