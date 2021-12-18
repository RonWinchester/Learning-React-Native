import React from 'react';
import { View, Image } from 'react-native';

import styled from 'styled-components/native';
export type TImageElement = {
    uri: string;
    imageSize: number
};

const Picture = styled.Image`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

const Wrapper = styled.View`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background-color: rgba(64, 58, 71, 0.5);
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ImageElement: React.FC<TImageElement> = ({uri, imageSize}) => {
  return (
    <Wrapper>
      <Picture
        source={{ uri }}
        height = {imageSize}
        width= {imageSize}
      />
    </Wrapper>
  );
};
