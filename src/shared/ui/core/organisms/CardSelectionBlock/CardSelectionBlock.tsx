import React from 'react';
import styled from 'styled-components/native';
import { TextBlock } from '../../atoms/TextBlock/TextBLock';
import { CardSelection } from '../../molecules/CardSelection/CardSelection';

type TCardSelectionBlock = {
  text: string;
  cardName: string;
  money: string;
};

const Container = styled.View`
backgroundColor: #352F3D;
margin-bottom: 36px;
`;

export const CardSelectionBlock: React.FC<TCardSelectionBlock> = ({
  text,
  cardName,
  money,
}) => {
  return (
    <Container >
      <TextBlock text={text} />
      <CardSelection cardName={cardName} money={money} />
    </Container>
  );
};
