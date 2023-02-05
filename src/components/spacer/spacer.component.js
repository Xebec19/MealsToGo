import styled from "styled-components/native";
import React, { useTheme } from "react";

const sizesVariant = {
  small: 1,
  medium: 2,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizesVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property} : ${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
