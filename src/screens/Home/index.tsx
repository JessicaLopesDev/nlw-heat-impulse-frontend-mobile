import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SignInBox } from '../../components/SignInBox';
import { useAuth } from '../../hooks/auth';
import * as S from './styles';

export function Home(){
  const { user } = useAuth();

  return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding': undefined}
  >
    <S.Container>
        <Header />
        <MessageList />
        { user ? <SendMessageForm /> : <SignInBox />}
      </S.Container>

  </KeyboardAvoidingView>
  )
}