import styled from 'styled-components';

export const CSSNav = styled.nav`
  grid-area: nav;
  width: 400px;

  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    list-style: none;

    li {
      text-decoration: none;
      background-color: rgba(90, 100, 150);
      font-weight: bold;
      font-size: 18px;
      border-radius: 5px;
      padding: 10px;

      &:hover {
        background-color: rgba(30, 100, 220);
        font-weight: bold;
      }

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
