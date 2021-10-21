import React from 'react';
import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { UserPhoto } from '../UserPhoto';

import * as S from './styles';

export function Header(){
  const { user, signOut } = useAuth();
  return (
    <S.Container>
      <LogoSvg />

      <S.RightSide>
        {user &&
          <S.LogOutButton>
            <S.ButtonText onPress={signOut}>Sair</S.ButtonText>
          </S.LogOutButton>
        }
        <UserPhoto  imageUri={user?.avatar_url}/>
      </S.RightSide>


    </S.Container>
  )
}