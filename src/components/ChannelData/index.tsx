import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => { //TypeScript
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div !== null && div !== undefined ) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
        <ChannelMessage
        author='Frodo'
        date='18/05/2020'
        content='Hoje chego em Orodruin.'
        />
        ))}

      <ChannelMessage
      author='Sauron'
      date='18/05/2020'
      content={
        <>
        <Mention>@Frodo</Mention>, não jogue o Anel. Você não é nada sem Ele.
        </>
      }
      hasMention
      isBot
      />
      </Messages>

      <InputWrapper>
      <Input type='text' placeholder='Conversar em #chat-livre' />
      <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;