import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components/native';

export const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.Image`
  ${({ theme }) => css`
    border-width: 3px;
    border-color: ${theme.colors.BLACK_SECONDARY};
  `}
`;

