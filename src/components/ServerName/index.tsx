import React from 'react';

import { Container, Title, ExpandIcon } from './styles';

const ChannelMessage: React.FC = () => { //TypeScript
  return (
    <Container>
      <Title>Servidor do Frodo</Title>
      <ExpandIcon />
    </Container>
  )
};

export default ChannelMessage;