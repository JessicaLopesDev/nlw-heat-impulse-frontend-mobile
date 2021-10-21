import React from 'react';
import { Message } from '../Message';
import * as S from './styles';

export function MessageList(){
  const message = {
    id: '1',
    text: 'mensagem de teste',
    user: {
      name: 'Jesssss',
      avatar_url: 'https://github.com/JessicaLopesDev.png'
    }
  }

  return (
    <S.Container
      keyboardShouldPersistTaps="never"
    >
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>

    </S.Container>
  )
}