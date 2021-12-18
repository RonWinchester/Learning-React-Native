import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { FlatListElement } from '../../molecules/FlatListElement';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { TElement } from '@pages/list-company/list-company';

type TElementList = {
  items: TElement[];
  name: string;
  imageSize: number;
  goPage: string;
};

export const ElementList: React.FC<TElementList> = ({
  items,
  name,
  imageSize,
  goPage,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => String(item[`${name}_id`])}
      renderItem={({ item, index }) => {
        return (
          <FlatListElement
            item={item}
            imageSize={imageSize}
            name={name}
            handler={() => {
              navigation.navigate(goPage, item);
            }}
          />
        );
      }}
      refreshControl={
        <RefreshControl onRefresh={() => null} refreshing={false} />
      }
    />
  );
};
