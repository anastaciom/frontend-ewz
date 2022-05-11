import styled from "styled-components";

export const TodosCardStyle = styled.div`
  width: 280px;
  background-color: #242424;
  height: 100px;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  color: #fff;
  p{
      font-weight: 400;
      font-size: 14px;
  }
  span {
    height: 6px;
    width: 47px;
    border-radius: 10px;
    background-color: ${props=>props.isCompleted ? '#17B978' :'#3D6CB9' };
  }
`;
