import styled from "styled-components";

export const PageNotFoundStyle = styled.main`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  div {
    background-color: #1c1c1c;
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 50%;
    color: #fff;
    img {
      object-fit: contain;
      width: 300px;
      height: 300px;
    }

    h1 {
      font-size: 20px;
      color: #fff;
      a {
        color: #fff;
        &:visited {
          color: #fff;
        }
      }
    }
  }
`;
