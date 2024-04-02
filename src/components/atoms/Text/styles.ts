// styles.js
import styled from "styled-components/native";
import { TextProps } from "react-native";

interface StyledTextProps extends TextProps {
  customColor?: string;
}

export const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.customColor || "#fff"};
  font-size: 24px;
  margin-top: 12px;
  font-family: "SourceSansPro_700Bold";
`;
