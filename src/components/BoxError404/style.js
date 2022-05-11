import styled from "styled-components";

export const BoxError404Style = styled.div`
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
  @media screen and (max-width: 660px) {
    width:90%;
  border-radius: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  h1 {
    text-align:center;
    font-size: 15px;
    width: 90%;
  }
  }

  @media (min-width: 660px) and (max-width: 800px) {
    width:90%;
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    width:90%;
    h1 {
    font-size: 20px;
  }
  }
`;
