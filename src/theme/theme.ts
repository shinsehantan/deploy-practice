import { COLOR } from "../constants/color";
import { BorderShape, Button, Font } from "../types/theme";
import { DefaultTheme } from "styled-components";
const button: Button = {
  size: {
    small: {
      width: "40px",
      height: "20px",
    },
    medium: {
      width: "60px",
      height: "40px",
    },
    large: {
      width: "80px",
      height: "50px",
    },
  },
  color: {
    primary: {
      bgColor: COLOR.PRIMARY_LIGHT,
      textColor: COLOR.BLACK,
      hoverBgColor: COLOR.PRIMARY,
      hoverTextColor: COLOR.WHITE,
      activeBgColor: COLOR.PRIMARY,
      activeTextColor: COLOR.WHITE,
    },
    secondary: {
      bgColor: COLOR.SECONDARY_LIGHT,
      textColor: COLOR.BLACK,
      hoverBgColor: COLOR.SECONDARY,
      hoverTextColor: COLOR.WHITE,
      activeBgColor: COLOR.SECONDARY,
      activeTextColor: COLOR.WHITE,
    },
  },
};

const font: Font = {
  size: {
    xSmall: "12px",
    small: "16px",
    medium: "20px",
    large: "24px",
    xLarge: "28px",
    xxLarge: "30px",
  },
  bold: {
    small: 400,
    medium: 600,
    large: 900,
  },
};

const borderShape: BorderShape = {
  smallRounded: "4px",
  mediumRounded: "10px",
  fullyRounded: "50px",
};

export const theme: DefaultTheme = {
  button,
  font,
  borderShape,
};
