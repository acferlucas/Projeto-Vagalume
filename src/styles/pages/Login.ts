import styled from 'styled-components';

import bgImg from '../../assets/backgroundimg.png'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${bgImg}) no-repeat;
  background-size: cover;

  display: flex;
  justify-content:center;
  
  main {
    margin-top: 6.5rem;
    border-radius: 1.5625rem;
    display: flex;
    flex-direction: column;
    height:32.1875rem;
    width: 29.8125rem;
    background-color: #fff;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.6);
  }

  .logo {
    margin-top: 1.5625rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content:center;
    align-items:center;
  }
  
  form {
    margin-top:2.7rem;
    width: 100%;
    display: flex;
    padding: 0 2rem;
    flex-direction: column;

    p {
      font-size: 1.25rem;
      font-weight: bold;
    }
    input {
      
      margin-top: 1rem;
      height: 2.7rem;
      width: 26.4375rem;
      border-radius:8px;
      border: 1px solid #A8A8B3;
      font-size: 18px;
      padding-left: 0.8rem;
    }
  }
  input + p {
    margin-top: 1rem;
  }
  .button-area{
    
    width:100%;
    display: flex;
    justify-content:center;
  }

  button {
    margin-top:1.75rem;
    height: 3rem;
    width: 6.25rem;
    background-color: #59409D;
    color: #fff;
    border: none;
    font-size: 18px;
  }

`; 