import styled from 'styled-components';

export const CSSCard = styled.div`
  height: 400px;
  width: 245px;
  background-color: #f1f1f1;
  margin: 10px;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.4);

  h2, p {
    padding: 5px;
    font-size: 22px;
    text-align: justify;
  }

  div#img {
    height: 300px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
