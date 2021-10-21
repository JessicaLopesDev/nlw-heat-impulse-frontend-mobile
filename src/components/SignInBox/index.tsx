import React from 'react';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';
import { Button } from '../Button';
import * as S from './styles';

export function SignInBox(){
  const theme = useTheme()
  const { signIn, isSigning } = useAuth();
  return (
    <S.Container>
      <Button 
        title="ENTRAR COM GITHUB"
        color={theme.colors.BLACK_PRIMARY}
        backgroundColor={theme.colors.YELLOW}
        icon='github'
        onPress={signIn}
        isLoading={isSigning}
      />

    </S.Container>
  )
}