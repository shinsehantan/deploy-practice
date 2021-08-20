import React from "react";
import styled, { css } from "styled-components";
import { COLOR } from "../constants/color";

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  themeColor?: string;
  themeSize?: string;
  fontSize?: string;
  fontBold?: string;
  shape?: string;
  isActive?: boolean;
  isHover?: boolean;
}

const a = 1;
const b = { ...(a && { 1: 2 }), borderRadius: "asdf" }; // {borderRadius}

const Inner = styled.button<Props>`
  border: none;
  ${({ theme, shape }) => 1}

  border-radius: ${({ theme, shape }) => css`
    ${shape ? theme.borderShape[shape] : ""}
  `};

  width: ${({ theme, themeSize }) => css`
    ${themeSize
      ? theme.button.size[themeSize].width
      : theme.button.size.medium.width}
  `};

  height: ${({ theme, themeSize }) => css`
    ${themeSize
      ? theme.button.size[themeSize].height
      : theme.button.size.medium.height}
  `};

  font-size: ${({ theme, fontSize }) => css`
    ${fontSize ? theme.font.size[fontSize] : theme.font.size.medium}
  `};

  font-weight: ${({ theme, fontBold }) => css`
    ${fontBold ? theme.font.bold[fontBold] : theme.font.bold.small}
  `};

  background-color: ${({ theme, themeColor }) => css`
    ${themeColor ? theme.button.color[themeColor].bgColor : COLOR.PRIMARY}
  `};

  color: ${({ theme, themeColor }) => css`
    ${themeColor ? theme.button.color[themeColor].textColor : COLOR.BLACK}
  `};

  &:hover {
    background-color: ${({ theme, themeColor, isHover }) => css`
      ${themeColor && isHover
        ? theme.button.color[themeColor].hoverBgColor
        : theme.button.color[themeColor].bgColor};
    `};

    color: ${({ theme, themeColor, isHover }) => css`
      ${themeColor && isHover
        ? theme.button.color[themeColor].hoverTextColor
        : theme.button.color[themeColor].textColor};
    `};
  }

  &:active {
    ${({ theme, themeColor, isActive }) => css`
      background-color: ${themeColor && isActive
        ? theme.button.color[themeColor].activeBgColor
        : theme.button.color[themeColor].bgColor};
    `};

    ${({ theme, themeColor, isActive }) => css`
      color: ${themeColor && isActive
        ? theme.button.color[themeColor].activeTextColor
        : theme.button.color[themeColor].textColor};
    `};
  }
`;

const Button = (props: Props) => {
  return <Inner {...props} />;
};

export default Button;
