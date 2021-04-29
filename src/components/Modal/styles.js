import styled from 'styled-components';

export const CSSModal = styled.div`
  background-color: whitesmoke;
  display: grid;
  min-height: 350px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    'thumbnail details'
    'description description';
  grid-gap: 10px;
`;

export const Thumbnail = styled.div`
  grid-area: thumbnail;
  padding-left: 8px;
  width: 100%;

  img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
  }
`;

export const Details = styled.div`
  grid-area: details;
  padding-right: 8px;

  h2, h4 {
    font-weight: bold;
  }

  span {
    text-align: justify;
    font-weight: bold
  }
`;

export const Description = styled.div`
  grid-area: description;
  padding: 0px 10px 10px 10px;
  overflow: hidden;

  p {
    text-align: justify;
  }
`;