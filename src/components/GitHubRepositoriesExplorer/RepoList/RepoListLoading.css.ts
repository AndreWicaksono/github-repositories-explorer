import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const ShimmerLine = styled.div`
  height: 16px;

  animation: ${shimmer} 1.2s ease infinite;
  background: linear-gradient(90deg, #eeeeee 0px, #f7f7f7 40px, #eeeeee 80px);
  background-size: 200% 100%;
  border-radius: 4px;

  &:last-child {
    width: 50%;
  }
`;

export const ShimmerRow = styled.div``;

export const Container = styled.div`
  min-height: 144px;

  background-color: #e0e0e0;
`;
