import styled from "styled-components";

import { colors } from "../../styles/stylesConsts";

export const ProductDrawerCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const CardMain = styled.section`
  display: flex;

  & img {
    width: 100%;
    max-width: 110px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 3fr;
  column-gap: 12px;
  row-gap: 4px;
`;

export const CardTitle = styled.h5`
  grid-column: 1;
  grid-row: 1;
`;

export const CardSize = styled.span`
  grid-column: 1;
  grid-row: 2;
  color: ${colors.mediumGray};
  font-size: small;
`;

export const CardAmount = styled.span`
  grid-column: 1;
  grid-row: 3;
`;

export const CardPrice = styled.span`
  grid-column: 2;
  grid-row: 1;
`;

export const CardInstallments = styled.span`
  grid-column: 2;
  grid-row: 2;
  color: ${colors.mediumGray};
  font-size: small;
`;

export const RemoveButton = styled.section`
  padding-top: 8px;

  button {
    background: transparent;
    border: none;
    color: red;
    font-size: small;
  }
`;
