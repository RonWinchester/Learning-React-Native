import { storiesOf } from '@storybook/react-native';
import { NextButton } from '.';

storiesOf('ui/molecules', module).add('next-button', () => {
    return <NextButton text={''} validation={function (): void {
        throw new Error('Function not implemented.');
    } }/>
  });