import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    height: 48px;
    padding: 0 20px;
    padding-bottom: ${getBottomSpace() + 32}px;
    align-items: center;
    justify-content: center;
  `}
`;