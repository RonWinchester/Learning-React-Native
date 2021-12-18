import React from 'react';
import styled from 'styled-components/native';
import { GoBackButton } from '../../atoms/GoBackButton/GoBackButton';

const Container = styled.View`
flexDirection: row;
justifyContent: center;
paddingBottom: 15px;
width: 100%;
`;

const Title = styled.Text`
color: white;
fontWeight: 600;
fontSize: 17px;
lineHeight: 22px;
`;

type TSearchBarHeader = {
    text: string
}

export const SearchBarHeader: React.FC<TSearchBarHeader> = ({text}) => {
  return (
    <Container>
      <GoBackButton />
      <Title>{text}</Title>
    </Container>
  );
};
