import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  background-color: #F0F2F5;
  main {
    width: 100%;
    padding: 2rem 2rem;
  }
  .main-header{
    width:100%;
    display: flex;
    justify-content:center;
  }
  @keyframes rotation { 
  100% {
    transform: rotate(360deg);
  }
}
  #loading{
    
    width: 80px;
    height: 80px;
    position: absolute;
    left: 52%;
    top: 48%;
    border: 6px solid;
    border-radius: 50%;
    border-color:  #F0F2F5 #000 #000 #000;
    animation-name: rotation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  
  
  
  .graphic-container {
    margin-top: 5rem;
    width: 100%;
    background-color: #Fff;
  }
  
  .header-content{
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    border-radius: 100%;
    padding: 1.5rem;
  }
  .header-content h1 {
    
    margin-top: 0.5rem;
    font-size:12px;
    min-width: 5rem;
  }
  
`;