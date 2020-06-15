import styled from "styled-components";

import { device, grayColors } from "../../styles/stylesConsts";

export const Container = styled.section`
  padding: 0 20px 24px;
  max-width: 1100px;
  margin: 0 auto;

  > div {
    color: ${grayColors.darkGray};
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const Grid = styled.section`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.biggerThanMedium} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.biggerThanLarge} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
