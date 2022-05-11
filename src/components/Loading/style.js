import styled from "styled-components";

export const LoadingStyle = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  h1 {
    color: #fff;
    font-size: 16px;
    padding-top: 10px;
  }
`;
