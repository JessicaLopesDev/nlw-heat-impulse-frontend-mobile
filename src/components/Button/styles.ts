import styled, { css } from 'styled-components/native';


export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.BOLD};
  `}
`;