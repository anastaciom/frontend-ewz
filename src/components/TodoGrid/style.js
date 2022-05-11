import styled from "styled-components";

export const GridAreaStyle = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 20px;
  }
  @media (min-width: 660px) and (max-width: 800px) {
    width: 100%;
  grid-template-columns: 1fr 1fr ;
  justify-items: center;
    row-gap: 30px;

  }
  @media (min-width: 800px) and (max-width: 1024px) {
    width: 100%;
  grid-template-columns: 1fr 1fr 1fr ;
  justify-items: center;
  }
`;
