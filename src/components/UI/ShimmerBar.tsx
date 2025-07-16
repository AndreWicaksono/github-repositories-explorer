import styled, { keyframes } from "styled-components";

// Shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const ShimmerBar = styled.div`
  height: 42.4px;
  width: 100%;

  background-color: #e0e0e0; /* slightly darker than #f2f2f2 baseline */
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #f2f2f2 40px,
    #e0e0e0 80px
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export default ShimmerBar;
