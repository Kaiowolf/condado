import React from 'react';

import { 
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon } from './styles';

const UserInfo: React.FC = () => { //TypeScript
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Frodo</strong>
          <span>#1203</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
};

export default UserInfo;