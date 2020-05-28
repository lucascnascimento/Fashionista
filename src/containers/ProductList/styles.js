import styled from "styled-components";

import { device } from "../../styles/device";

export const Container = styled.section`
  padding: 40px 20px;
  max-width: 1100px;
  margin: 0 auto;

  > div {
    color: #888;
    margin-bottom: 10px;
  }
`;

export const Grid = styled.section`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.medium} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.large} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
