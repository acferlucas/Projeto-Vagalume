import styled from 'styled-components';

export const Container = styled.div`
  width: 10%;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 3.0625rem 2.375rem;
  background-color: #4A4B4C;

  img {
    max-width:6.375rem;
  }
  
  div {
    margin: 7rem;
    display: flex;
    flex-direction: column;
  }

  svg {
    cursor: pointer;
    color: #fff;
    transition: 0.2s
  }
  
  svg:hover {
    color: #FF9801;
  }
  a {
    margin-top:2rem;
    text-decoration:none;
  }
  
  svg + svg {
    margin-top: 2rem;
  }
 

`;
