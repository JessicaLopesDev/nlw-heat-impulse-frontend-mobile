import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.BLACK_SECONDARY};
    padding-top: ${getStatusBarHeight() + 17}px;
  `}
`;