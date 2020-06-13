import styled from "styled-components";

import { grayColors } from "../../styles/stylesConsts";

export const ProductDrawerCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px;

  border-bottom: 1px solid ${grayColors.lineGray};
`;

export const CardMain = styled.section`
  display: flex;
  padding-left: 8px;

  & img {
    width: 100%;
    max-width: 110px;
    height: auto;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 3fr;
  column-gap: 12px;
  row-gap: 4px;
  width: 100%;
`;

export const CardTitle = styled.h5`
  grid-column: 1;
  grid-row: 1;

  font-size: 0.9rem;
`;

export const CardSize = styled.span`
  grid-column: 1;
  grid-row: 2;
  color: ${grayColors.mediumGray};

  font-size: 0.9rem;
`;

export const CardPrice = styled.span`
  grid-column: 2;
  grid-row: 1;

  font-size: 1rem;
`;

export const CardInstallments = styled.span`
  grid-column: 2;
  grid-row: 2;
  color: ${grayColors.mediumGray};

  font-size: 0.9rem;
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

export const CounterWrapper = styled.div`
  grid-column: 1;
  grid-row: 3;

  & span {
    padding: 0 8px;
  }
`;

export const PlusButton = styled.button`
  background: transparent;
  border: none;
  & svg {
    height: 24px;
    color: black;
  }
`;

export const MinusButton = styled.button`
  background: transparent;
  border: none;
  & svg {
    height: 24px;
  }
`;
