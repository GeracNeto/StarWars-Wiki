import styled from 'styled-components/native';
import { Text } from 'react-native';

export const StyledText = styled.Text`
    font-weight: bold;
    color: ${props => props.theme.bg};
    font-size: 24px;
    margin-top: 12px;      
`;

// Rest of your code remains the same
