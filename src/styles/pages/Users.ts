import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color:#F0F2F5;
  
  main {
    padding-left: 2.875rem;
    width: 100%;
}
  main h1 {
    margin-top:9.8rem;
    color: #989898;
    font-family: 'Poppins';
    font-size: 25px;
    line-height:32px;
}
`;

export const MainTable = styled.table`
  
  width: 90%;
  border-spacing: 0 1rem;
  margin-top:0.8rem;

  thead {
    text-align:left;
    font-weight: 400;
    font-size:16px;
    color: #969CB2;
  }
  thead th svg{
    padding-top: 8px;
  }
  
`;
