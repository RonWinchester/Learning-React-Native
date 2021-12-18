import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { SearchBar } from '.';

storiesOf('ui/molecules', module).add('search-bar', () => {
  return (
    <View>
      <SearchBar placeholder="Поиск" />
    </View>
  );
});
