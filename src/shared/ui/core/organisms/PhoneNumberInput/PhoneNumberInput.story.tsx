import { storiesOf } from '@storybook/react-native';
import { PhoneNumberInput } from './PhoneNumberInput';


storiesOf('ui/organisms', module).add('Phone-Number-Input', () => {
    return (
        <PhoneNumberInput placeholder={'Номер телефона'} uri={''} setNumber={()=>{}}/>
    );
  }); 