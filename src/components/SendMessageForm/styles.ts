import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 194px;
    background-color: ${theme.colors.BLACK_TERTIARY};
    padding: 0 24px;
    padding-bottom: ${getBottomSpace() + 16}px;
    padding-top: 16px;
  `}
`;

export const TextInput = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: 90px;
    color: ${theme.colors.WHITE};
    font-size: 16px;
    font-family: ${theme.fonts.REGULAR};
  `}
`;