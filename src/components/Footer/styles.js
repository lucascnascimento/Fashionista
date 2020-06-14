import styled from "styled-components";

export const AppFooter = styled.div`
  background: black;
  padding: 16px 0;
  display: flex;
  flex-direction: column;

  & span {
    color: white;
    margin: auto;
  }
`;

export const SocialMedia = styled.div`
  margin: auto;
  padding: 8px;

  & a {
    padding: 0 8px;
  }
`;
