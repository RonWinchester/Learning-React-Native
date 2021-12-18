import { TElement } from '@pages/list-company/list-company';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ImageElement } from '../../atoms/ImageElement';

export type TFlatListElement = {
  item: TElement;
  imageSize: number;
  name: string;
  handler: () => void;
};

const Wrapper = styled.View`
  flex-direction: row;
  margin-left: 16px;
  margin-right: 16px;
  height: 67px;
`;

const Title = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: white;
  borderBottomColor: #403a47;
  borderBottomWidth: 1;
  flex: 2;
  textAlignVertical: center;
  margin-left: 16px;
`;

export const FlatListElement: React.FC<TFlatListElement> = ({
  item,
  imageSize,
  name,
  handler,
}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <Wrapper>
        <ImageElement uri={item[`${name}_icon`]} imageSize={imageSize} />
        <Title>{item[`${name}_name`]}</Title>
      </Wrapper>
    </TouchableOpacity>
  );
};
