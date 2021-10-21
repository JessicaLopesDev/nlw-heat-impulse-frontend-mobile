import React from 'react';
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';

import * as S from './styles';

export function Header(){
  return (
    <S.Container>
      <LogoSvg />

      <S.RightSide>
        <S.LogOutButton>
          <S.ButtonText>Sair</S.ButtonText>
        </S.LogOutButton>

        <UserPhoto  imageUri='https://github.com/JessicaLopesDev.png'/>
      </S.RightSide>


    </S.Container>
  )
}