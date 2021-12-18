import React from "react";
import styled from 'styled-components/native';

const TextItem = styled.Text`
background-color: transparent;
color: #706D76;
font-weight: 600;
font-size: 15px;
line-height: 20px;
padding: 16px;
`
type TTextBlock = {
    text: string
}

export const TextBlock: React.FC<TTextBlock> = ({text}) => {
    return (
        <TextItem>{text}</TextItem>
    )
}