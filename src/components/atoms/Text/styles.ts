// styles.js
import styled from "styled-components/native";
import { TextProps } from "react-native";

interface StyledTextProps extends TextProps {
  customColor?: string;
}

export const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.customColor || props.theme.colors.white};
  font-size: ${(props) => props.theme.metrics.px(24)}px;
  margin-top: ${(props) => props.theme.metrics.px(12)}px;
  font-family: ${(props) => props.theme.fonts.bold};
`;
