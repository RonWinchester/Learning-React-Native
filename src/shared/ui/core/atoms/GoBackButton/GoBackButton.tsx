import { NavigationProp, useNavigation } from '@react-navigation/native';
import { GoBackIcon } from '@shared/ui/icons';
import React from 'react';
import styled from 'styled-components/native';

type TGoBackButton = {
   
}

const Container = styled.TouchableOpacity`
position: absolute;
left: 2px; 
top: 5px;
`;

export const GoBackButton: React.FC = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <Container
        onPress={() => navigation.goBack()}
      >
        <GoBackIcon color="white" />
      </Container>
    )
}