import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 0 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogOutButton = styled(TouchableOpacity)`
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.fonts.REGULAR};
    color: ${theme.colors.WHITE};
    margin-right: 20px;
  `}
`;