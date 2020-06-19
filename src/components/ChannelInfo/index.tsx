import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => { //TypeScript
  return (
    <Container>
      <HashtagIcon />
      <Title>chat-livre</Title>
      <Separator />

      <Description>Canal aberto para conversa</Description>
    </Container>
  )
};

export default ChannelInfo;