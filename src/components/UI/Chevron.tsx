import React from "react";

import styled from "styled-components";

import ChevronSvg from "../../assets/chevron.svg?react";

const StyledChevron = styled(ChevronSvg)<{
  className?: string;
  $rotated?: boolean;
}>`
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(${({ $rotated }) => ($rotated ? -90 : 90)}deg);
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

interface ChevronProps {
  rotated?: boolean;
  className?: string;
}

const Chevron: React.FC<ChevronProps> = ({ rotated = false, className }) => (
  <StyledChevron $rotated={rotated} className={className} />
);

export default Chevron;
