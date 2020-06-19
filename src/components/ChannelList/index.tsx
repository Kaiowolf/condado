import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => { //TypeScript
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="terra-media" />
      <ChannelButton channelName="condado" />
      <ChannelButton channelName="sociedade do anel" />
      <ChannelButton channelName="floresta velha" />
      <ChannelButton channelName="precioso" />
    </Container>
  )
};

export default ChannelList;