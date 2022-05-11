import styled from "styled-components";

export const BoxTitleStyle = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  flex: 3;
  h1 {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
  @media screen and (width: 1920px) {
    h1 {
    font-size: 20px;
  }
  @media (min-width: 660px) and (max-width: 800px) {
    h1 {
    font-size: 20px;
  }
  }
  }
`;