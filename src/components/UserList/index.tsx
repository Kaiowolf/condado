import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?:boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
};

const UserList: React.FC = () => { //TypeScript
  return (
    <Container>
      <Role>Disponível  - 1</Role>
      <UserRow nickname='Frodo' />

      <Role>Offline  - 18</Role>
      <UserRow nickname='Sauron' isBot />
      <UserRow nickname='Aragon'/>
      <UserRow nickname='Arwen'/>
      <UserRow nickname='Bilbo'/>
      <UserRow nickname='Elrond'/>
      <UserRow nickname='Gandalf'/>
      <UserRow nickname='Gimli'/>
      <UserRow nickname='Gollum'/>
      <UserRow nickname='Legolas'/>
      <UserRow nickname='Meriadoc'/>
      <UserRow nickname='Peregrin'/>
      <UserRow nickname='Samwise'/>
      <UserRow nickname='Hobbit'/>
      <UserRow nickname='Hobbit'/>
      <UserRow nickname='Hobbit'/>
      <UserRow nickname='Hobbit'/>
      <UserRow nickname='Hobbit'/>
      <UserRow nickname='Hobbit'/>
    </Container>
  )
};

export default UserList;