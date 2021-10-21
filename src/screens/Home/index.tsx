import React from 'react';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
import * as S from './styles';

export function Home(){
  return (
    <S.Container>
      <Header />
      <MessageList />
      <SignInBox />
    </S.Container>
  )
}