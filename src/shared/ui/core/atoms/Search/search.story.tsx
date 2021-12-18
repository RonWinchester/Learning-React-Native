import { storiesOf } from '@storybook/react-native';
import { Search } from '.';

storiesOf('ui/atoms', module).add('search', () => {
  return <Search placeholder="Поиск" />;
});
