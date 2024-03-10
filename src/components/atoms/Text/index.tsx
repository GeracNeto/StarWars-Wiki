// Seu componente CustomText
import React from 'react';
import { StyledText } from "./styles";

interface CustomTextProps {
    customColor?: string;
    children: React.ReactNode;
}

export const CustomText = ({ children, customColor }: CustomTextProps) => {
    return (
        <StyledText customColor={customColor}>
            {children}
        </StyledText>
    );
};
