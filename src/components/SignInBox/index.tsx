import React from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../Button';
import * as S from './styles';

export function SignInBox(){
  const theme = useTheme()
  return (
    <S.Container>
      <Button 
        title="ENTRAR COM GITHUB"
        color={theme.colors.BLACK_PRIMARY}
        backgroundColor={theme.colors.YELLOW}
        icon='github'
      />

    </S.Container>
  )
}