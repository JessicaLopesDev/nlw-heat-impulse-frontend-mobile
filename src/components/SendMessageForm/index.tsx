import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../Button';
import * as S from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const theme = useTheme();
  return (
    <S.Container>
      <S.TextInput 
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={theme.colors.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        style={{textAlignVertical: 'top'}}
      />
      <Button 
        title="ENVIAR MENSAGEM"
        color={theme.colors.WHITE}
        backgroundColor={theme.colors.PINK}
      />

    </S.Container>
  )
}