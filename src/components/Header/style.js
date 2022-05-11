import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  padding-left: 65px;
  padding-right: 0px;
  position: fixed;
  z-index: 999;
  top: 0;
  @media screen and (width: 1920px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 660px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 660px) and (max-width: 800px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    padding-left: 60px;
    padding-right: 30px;
  }
`;
