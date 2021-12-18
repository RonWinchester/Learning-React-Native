import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const FlatListContainer = styled.View`
  borderTopColor: #403a47;
  borderTopWidth: 1;
  padding: 8px 16px 16px 16px;
`;

const FlatListElement = styled.TouchableOpacity`
  margin-right: 16px;
`;

const FlatListText = styled.Text`
  background: #403a47;
  border-radius: 24px;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #c2c1c6;
  width: 93px;
  height: 48px;
  text-align: center;
  textAlignVertical: center;
`;
type TFlatListPrice = {
  arr: Array<number>;
  handler: (item: string) => void;
};

export const FlatListPrice: React.FC<TFlatListPrice> = ({ arr, handler }) => {
  return (
    <FlatListContainer>
      <FlatList
        data={arr}
        keyExtractor={(item, index) => String(index)}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <FlatListElement
              onPress={() => {
                handler(item.toString());
              }}
            >
              <FlatListText>{item} ₽</FlatListText>
            </FlatListElement>
          );
        }}
      ></FlatList>
    </FlatListContainer>
  );
};
