import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Message, MessageProps } from '../Message';
import { io } from 'socket.io-client';
import * as S from './styles';
import { MESSAGES_EXAMPLE } from '../../utils/messages';

let queueMessages: MessageProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
  queueMessages.push(newMessage);
  console.log(newMessage);
});

export function MessageList(){
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesReponse = await api.get<MessageProps[]>('./messages/last3');
      setCurrentMessages(messagesReponse.data);
    }
    fetchMessages();
  },[]);

  useEffect(() => {
    const timer = setInterval(() => {
      if(queueMessages.length > 0) {
        setCurrentMessages(prevState => [queueMessages[0], prevState[0], prevState[1]]);
        queueMessages.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  },[]);

  return (
    <S.Container
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message, index) => <Message key={index} data={message} />)}

    </S.Container>
  )
}