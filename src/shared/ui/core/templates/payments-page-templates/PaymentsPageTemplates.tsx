import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { NextButton } from '../../molecules/NextButton';
import { SearchBarHeader } from '../../molecules/SearchBarHeader';
import { AmountField } from '../../organisms/AmountField';
import { CardSelectionBlock } from '../../organisms/CardSelectionBlock/CardSelectionBlock';
import { PhoneNumberInput } from '../../organisms/PhoneNumberInput/PhoneNumberInput';

const Container = styled.View`
  background: #312c39;
  padding-top: 31px;
  flex-direction: column;
  flex: 1;
`;

const SearchBarHeaderContainer = styled.View`
  padding: 0 16px;
`;

type TPaymentsPageTemplates = {
    route: any
    setNumber: (props:string)=>void
    setMoney: (props:string)=>void
    validation: ()=>void
}

export const PaymentsPageTemplates: React.FC<TPaymentsPageTemplates> = ({route, setNumber, setMoney, validation}) => {
  return (
    <Container>
      <SearchBarHeaderContainer>
        <SearchBarHeader text={route.params['service_name']} />
      </SearchBarHeaderContainer>

      <CardSelectionBlock
        text={'Карта для оплаты'}
        cardName={'Карта зарплатная'}
        money={'457 334,00'}
      />
      <PhoneNumberInput
        placeholder={'Номер телефона'}
        uri={route.params['service_icon']}
        setNumber={setNumber}
      />
      <AmountField text={'Сумма'} placeholder={'0 ₽'} setMoney={setMoney} />
      <NextButton text={'Продолжить'} validation={validation} />
    </Container>
  );
};
