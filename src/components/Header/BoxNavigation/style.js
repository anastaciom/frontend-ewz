import styled from "styled-components";

export const BoxNavigationStyle = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
  flex: 1;
  justify-content: center;
  gap: 30px;
  a {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    border-radius: 10px;
    padding: 8px;
    transition: 0.2s all ease-in-out;
    &:hover {
      color: #fff;
      background-color: #3a3a3a;
    }
    &:active {
      transform: scale(0.85);
    }
    &:visited {
      color: #fff;
    }
  }
`;
