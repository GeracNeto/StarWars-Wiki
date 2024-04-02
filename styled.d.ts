import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: DefaultColors;
    fonts: DefaultFonts;
    metrics: DefaultMetrics;
  }
}

interface DefaultColors {
  white: string;
  light: string;
  red: string;
  dark: string;
  black: string;
}

interface DefaultFonts {
  regular: string;
  semiBold: string;
  bold: string;
  black: string;
}

interface DefaultMetrics {
  px: (valuePx: number) => number;
}
