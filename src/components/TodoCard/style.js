import styled from "styled-components";

export const TodosCardStyle = styled.div`
  width: 264px;
  background-color: #242424;
  height: 96px;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  color: #fff;
  p {
    font-weight: 400;
    font-size: 13px;
  }
  span {
    height: 6px;
    width: 43px;
    border-radius: 10px;
    background-color: ${(props) => (props.isCompleted ? "#17B978" : "#3D6CB9")};
  }

  @media screen and (width: 1920px) {
    width: 400px;
    height: 140px;
    justify-content: space-evenly;
    p {
      font-size: 17px;
    }
    span {
      height: 8px;
      width: 58px;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 660px) {
    width: 100%;
    p {
      font-size: 14px;
    }
  }

  @media (min-width: 660px) and (max-width: 800px) {
    width:90%;
    p {
      font-size: 14px;
    }
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    width: 90%;
  height: 85%;
  p {
    font-size: 15px;
  }
  span {
    height: 8px;
    width: 60px;
  }
  }
`;
