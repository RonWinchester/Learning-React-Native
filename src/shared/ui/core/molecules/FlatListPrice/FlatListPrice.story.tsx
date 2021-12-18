import { storiesOf } from '@storybook/react-native';
import { FlatListPrice } from '.';


storiesOf('ui/molecules', module).add('flat-list-price', () => {
    return <FlatListPrice arr={[]} handler={function (item: string): void {
        throw new Error('Function not implemented.');
    } }/>
  });