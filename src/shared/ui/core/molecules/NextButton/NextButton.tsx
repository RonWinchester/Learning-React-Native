import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Alert } from "react-native"; 

const Container = styled.View`
justify-content: center;
align-items: center;
flex: 3;
`;

const TouchableOpacityElement = styled.TouchableOpacity`
`;

const ButtonElement = styled.View`
background: #6C78E6;
box-shadow: 0px 8.93373px 22.3343px rgba(108, 120, 230, 0.09);
border-radius: 26px;
width: 288px;
height: 52px;
justify-content: center;
align-items: center;
`

const Title = styled.Text`
font-weight: 600;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
`
type TNextButton = {
    text: string
    validation: ()=> void
}
export const NextButton: React.FC<TNextButton> = ({text, validation}) => {

  return (
    <Container>
      <TouchableOpacityElement onPress={validation}>
          <ButtonElement>
            <Title>{text}</Title>
          </ButtonElement>
      </TouchableOpacityElement>
    </Container>
  );
};
