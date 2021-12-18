import { storiesOf } from '@storybook/react-native';
import { CardSelection } from './CardSelection';

storiesOf('ui/molecules', module).add('card-selector', () => {
    return <CardSelection cardName={'Карта зарплатная'} money={'457 334,00'}/>;
  });