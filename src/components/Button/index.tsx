import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator, ColorValue, TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean;
}

export function Button({ 
  title, 
  color,
  backgroundColor,
  icon,
  isLoading,
  ...rest 
}: Props){
  return (
    <S.Container 
      style={{backgroundColor}}
      activeOpacity={0.7} 
      {...rest}
    >
      {
        isLoading ?
        <ActivityIndicator color={color} /> :

        <>
          <AntDesign 
            style={{ marginRight: 12}}
            name={icon} 
            size={26}
          />

          <S.Title style={{color}}>
            {title}
          </S.Title>
        </>
      }

    </S.Container>
  )
}