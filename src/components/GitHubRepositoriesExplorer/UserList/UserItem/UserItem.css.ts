import styled from "styled-components";

export const AnimatedPanel = styled.div<{
  $open: boolean;
  $panelHeight: number;
}>`
  height: ${({ $open, $panelHeight }) => ($open ? `${$panelHeight}px` : "0px")};

  overflow: scroll;
  transition: max-height 0.35s ease;
`;

export const Container = styled.article``;

export const Header = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  background-color: #f2f2f2;
  cursor: pointer;
  padding: 8px;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Username = styled.div``;
