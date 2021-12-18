import { CardSelect } from "@shared/ui/icons/icon";
import React from "react";
import styled from 'styled-components/native';

const Container = styled.View`
flexDirection: row;
padding: 16px;
background-color: transparent;
align-items: center;
`

const ImageCard = styled.Image`
width: 40px;
height: 28px;
`

const TextContainer = styled.View`
flexDirection: column;
margin-left: 16px;
`

const TextContent = styled.Text`
font-weight: normal;
font-size: 15px;
line-height: 20px;
color: #FFFFFF;
`

const ButtonContainer = styled.TouchableOpacity`
margin-left: auto;
`;

type TCardSelection = {
    cardName: string
    money: string
}

export const CardSelection:React.FC<TCardSelection> = ({cardName, money}) => {
    return (
        <Container>
            <ImageCard source={require('../../../../../assets/icons/card.png')}/>
            <TextContainer>
                <TextContent>{cardName}</TextContent>
                <TextContent>{money} ₽</TextContent>
            </TextContainer>
            <ButtonContainer onPress={()=>{}}>
                <CardSelect color='#706D76'/>
            </ButtonContainer>
        </Container>
    )
}