import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useTheme } from 'styled-components';
import { api } from '../../services/api';
import { Button } from '../Button';
import * as S from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const theme = useTheme();

  async function handleMessageSubmit() {
    const formattedMessage = message.trim();

    if(formattedMessage.length > 0) {
      setSendingMessage(true);
      await api.post('/messages', { message: formattedMessage });

      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert('Mensagem enviada com sucesso!')


    } else {
      Alert.alert('Escreva uma mensagem para enviar')
    }
  }

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
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />

    </S.Container>
  )
}