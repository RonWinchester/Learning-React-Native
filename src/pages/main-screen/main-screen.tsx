import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export type TRoute = {
  route: { key: string; name: string; params: undefined };
};

export const MainScreen: React.FC<TRoute> = ({ route }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 49,
    backgroundColor: '#312C39',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 41,
    color: 'white',
    textAlign: 'center',
    
  },
});
