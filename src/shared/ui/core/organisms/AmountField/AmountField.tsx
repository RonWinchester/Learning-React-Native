import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { TextBlock } from "../../atoms/TextBlock/TextBLock";
import { FlatListPrice } from "../../molecules/FlatListPrice";

const Container = styled.View`
flex-direction: column;
background: #352F3D;
`;

const InputElemnt = styled.TextInput`
width: 100%;
paddingHorizontal: 8px;
paddingVertical: 8px;
color: #FFFFFF;
font-weight: 500;
font-size: 28px;
line-height: 34px;
`;

const InputContainer = styled.View`
padding: 7px 16px 14px 16px;
`;


type TAmountField = {
    text: string
    placeholder: string
    setMoney: (prop:string)=> void
}
export const AmountField: React.FC<TAmountField> = ({text, placeholder, setMoney}) => {
const arr = [
    100, 500, 1000, 2500
]

    const [value, setValue] = React.useState('')
    setMoney(value)



    return (
        <Container>
            <TextBlock text={text}/>
            <InputContainer>
                <InputElemnt
                placeholderTextColor="#FFFFFF"
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                keyboardType='numeric'
                />
            </InputContainer>
            <FlatListPrice arr={arr} handler={setValue}/>
        </Container>
    )
}; 