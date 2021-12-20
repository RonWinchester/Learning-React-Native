import { CloseIcon } from '@shared/ui/icons/icon';
import { $popup, closePopup } from '../../../../../models/popup';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 90%;
  position: absolute;
  border-radius: 13px;
  top: 27px;
  margin-left: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
const TextPopup = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  height: 100%;
`;

const CloseButton = styled.TouchableOpacity`
  align-self: center;
`;

type TPopup = {
  text: string;
  time?: number;
  backgroundColor?:string;
};


export const Popup: React.FC<TPopup> = ({ text, time, backgroundColor }) => {
  time &&
    React.useEffect(() => {
      const timer = setTimeout(() => closePopup(), time);
      return () => clearTimeout(timer);
    }, []);

  console.log($popup.getState().text);
  return (
    <Container style={{backgroundColor:backgroundColor || '#fb6176'}}>
      <TextPopup>{text}</TextPopup>
      <CloseButton
        onPress={() => {
          closePopup();
        }}
      ><CloseIcon color="white"/>
      </CloseButton>
    </Container>
  );
};
