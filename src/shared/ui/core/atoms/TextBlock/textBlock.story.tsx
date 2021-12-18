import { storiesOf } from '@storybook/react-native';
import { TextBlock } from './TextBLock';

storiesOf('ui/atoms', module).add('text-block', () => {
    return <TextBlock text="Карта для оплаты" />;
  });