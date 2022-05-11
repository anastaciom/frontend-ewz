import styled from "styled-components";

export const UserCardStyle = styled.div`
  background-color: #242424;
  width: 254px;
  height: 284px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  justify-content: flex-start;
  p {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
  }
  button {
    background-color: #3d6cb9;
    outline: none;
    border: none;
    width: 80%;
    height: 32px;
    border-radius: 5px;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    &:active {
      transform: scale(0.85);
    }
  }
`;

export const UserAvatarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  height: 30%;
  span {
    background-color: #c4c4c4;
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    color: #fff;
    gap: 8px;
    h1 {
      font-size: 14px;
      font-weight: 400;
      padding: 0;
    }
    h2 {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
