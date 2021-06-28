import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  background-color: #F0F2F5;
  
  main {
    margin-top:4rem;
    width: 100%;
    padding: 0rem 2rem;
  }

  @keyframes rotation { 
    100% {
      transform: rotate(360deg);
    }
  }

  #loading{
    
    margin-top:5rem;
    width: 80px;
    height: 80px;
    position: absolute;
    left: calc(50% - 40px);
    border: 6px solid;
    border-radius: 50%;
    border-color:  #F0F2F5 #000 #000 #000;
    animation-name: rotation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  
  .chart-container {
    margin-top: 5rem;
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
    position: relative;
  }

  .main-header{
    width:100%;
    display: flex;
    justify-content:center;
  }
  .header-content{
    background-color: #fff;
    text-align: center;
    border-radius: 50%;
    min-width: 8rem;
    min-height: 8rem;
    padding: 1rem;
  }
  .header-content h1 {
    
    margin-top: 0.5rem;
    font-size:12px;
    min-width: 5rem;
  }
  
  
`;