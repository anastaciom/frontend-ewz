import styled from "styled-components";

export const DashboardTodosStyle = styled.main`
  position: absolute;
  width: 90%;
  height: 80vh;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h1 {
    padding: 20px 20px 20px 0px;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }
  @media screen and (max-width: 660px) {
    h1 {
      padding: 18px 18px 18px 0px;
      font-size: 20px;
    }
    height: auto;
    top: 4%;
    left: 50%;
    transform: translate(-50%, 4%);
  }

  @media (min-width: 660px) and (max-width: 800px) {
    h1 {
      padding: 18px;
      font-size: 25px;
    }
    height: auto;
    top: 6%;
    left: 50%;
    transform: translate(-50%, 6%);
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    h1 {
      padding: 18px;
      font-size: 28px;
    }
  }
`;
