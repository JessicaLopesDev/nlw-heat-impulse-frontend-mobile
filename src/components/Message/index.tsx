import React from 'react';
import { UserPhoto } from '../UserPhoto';
import * as S from './styles';

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

type Props = {
  data: MessageProps;
}

export function Message({ data }: Props){
  return (
    <S.Container
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{type: 'timing', duration: 700}}
    >
      <S.MessageText>{data.text}</S.MessageText>

      <S.Footer>
        <UserPhoto 
          imageUri={data.user.avatar_url}
          size="SMALL"
        />

        <S.UserName>{data.user.name}</S.UserName>
      </S.Footer>

    </S.Container>
  )
}