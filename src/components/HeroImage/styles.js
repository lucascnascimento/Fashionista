import styled from "styled-components";

export const Hero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.img});

  /* Set a specific height */
  height: 100vh;
  width: 100%;

  /* Position and center the image to scale nicely on all screens */
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
