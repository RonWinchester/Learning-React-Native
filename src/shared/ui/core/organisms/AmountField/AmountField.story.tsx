import { storiesOf } from '@storybook/react-native';
import { AmountField } from '.';

storiesOf('ui/organisms', module).add('Amount-Field', () => {
    return (
        <AmountField text={''} placeholder={''} setMoney={()=>{}}/>
    );
  }); 