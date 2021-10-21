import { MotiView } from '@motify/components';
import styled, { css } from 'styled-components/native';

export const Container = styled(MotiView)`
  width: 100%;
  margin-bottom: 36px;
`;

export const MessageText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-family: ${theme.fonts.REGULAR};
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 12px;
  `}
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-size: 16px;
    font-family: ${theme.fonts.REGULAR};
    margin-left: 16px;
  `}
`;