import { storiesOf } from '@storybook/react-native';
import { CardSelectionBlock } from './CardSelectionBlock';

storiesOf('ui/organisms', module).add('Card-Selection-Block', () => {
    return (
        <CardSelectionBlock text={'Карта для оплаты'} cardName={'Карта зарплатная'} money={'457 334,00'}/>
    );
  }); 