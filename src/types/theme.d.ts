type NormalSize = "small" | "medium" | "large";

type ExtendedSize = NormalSize | "xSmall" | "xLarge" | "xxLarge";

type Color = "primary" | "secondary";

type RoundedShape = "smallRounded" | "mediumRounded" | "fullyRounded";

type ButtonColorKind =
  | "bgColor"
  | "textColor"
  | "hoverBgColor"
  | "hoverTextColor"
  | "activeBgColor"
  | "activeTextColor";

interface Length {
  width: string;
  height: string;
}

export interface Button {
  size: { [key in NormalSize]: Length };
  color: { [key in Color]: { [key in ButtonColorKind]: string } };
}

export interface Font {
  size: { [key in ExtendedSize]: string };
  bold: { [key in NormalSize]: number };
}

export type BorderShape = {
  [key in RoundedShape]: string;
};
