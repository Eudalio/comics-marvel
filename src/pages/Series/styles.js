import styled from 'styled-components'
import bg from '../../assets/img/fundo.jpeg'

export const Container = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas:
      'header'
      'content';
    grid-row-gap: 10px;
    background-image: url(${bg});
`;

export const ButtonMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #F0131E;
  margin-bottom: 2px;
  
  p {
    font-size: 20px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border: 1px solid #000;
    padding: 5px;
    transition: background-color .3s ease-out;
    
    &:hover {
      font-weight: bold;
      background-color: rgba(30, 100, 220);
      border: 1px solid #000;
    }
  }
`;