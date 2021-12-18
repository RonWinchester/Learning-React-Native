import { storiesOf } from '@storybook/react-native';
import { ImageElement } from '.';

storiesOf('ui/atoms', module).add('image-element', () => {
    return (
        <ImageElement uri={'https://images.unsplash.com/photo-1597806999047-9456837df754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} imageSize={40}/>
    );
  });