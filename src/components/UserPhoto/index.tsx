import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'styled-components';
import avatarImg from '../../assets/avatar.png';

import * as S from './styles';

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  }
}

type Props = {
  imageUri: string | undefined;
  size?: 'SMALL' | 'NORMAL';
}

const AVATAR_DEFAULT =  Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ 
  imageUri, 
  size = 'NORMAL'
}: Props){
  const { containerSize, avatarSize } = SIZES[size];
  const theme = useTheme();
  return (
    <S.Container
      colors={[theme.colors.PINK, theme.colors.YELLOW]}
      start={{ x: 0, y: 0.8}}
      end={{ x: 0.9, y: 1}}
      style={
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        }
      }
    >
      <S.UserImage
        source={{ uri: imageUri || AVATAR_DEFAULT}}
        style={
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          }
        }
      />
    
    </S.Container>
  )
}