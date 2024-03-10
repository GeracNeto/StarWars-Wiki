import React from 'react';
import { StyledText } from "./styles";

export const CustomText = ({ children }) => {
    return (
        <StyledText>
            {children}
        </StyledText>
    );
};
