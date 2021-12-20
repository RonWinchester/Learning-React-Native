import { CloseIcon } from '@shared/ui/icons/icon';
import { $popup, closePopup } from '../../../../../models/popup';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  backgroundcolor: #fb6176;
  width: 90%;
  height: 69px;
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
`;

const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

type TPopup = {
  text: string;
  time?: number;
};

export const Popup: React.FC<TPopup> = ({ text, time }) => {
  time &&
    React.useEffect(() => {
      const timer = setTimeout(() => closePopup(), time);
      return () => clearTimeout(timer);
    }, []);

  console.log($popup.getState().text);
  return (
    <Container>
      <TextPopup>{text}</TextPopup>
      <CloseButton
        onPress={() => {
          closePopup();
        }}
      >
        <CloseIcon color="white" />
      </CloseButton>
    </Container>
  );
};
