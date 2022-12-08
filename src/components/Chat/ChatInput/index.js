import React, { useCallback, useLayoutEffect, useState } from 'react';
import styles from './styles';

import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { palette } from '../../../theme/palette';

const ChatInput = () => {
  const [messages, setMessages] = useState([]);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    // setMessages([...messages, ...messages]);
    const { _id, createdAt, text, user } = messages[0];
  }, []);

  return (
    
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      showUserAvatar={false}
      onSend={messages => onSend(messages)}
      messagesContainerStyle={{
        backgroundColor: palette.lightblue,
      }}
      textInputStyle={{
        backgroundColor: palette.lightblue,
        borderRadius: 30,
        color: palette.blue,
      }}
      user={{
        _id: 1,
        name: 'Betül Ceren Yetiz',
        avatar:
          'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png',
      }}
      renderBubble={props => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: palette.blue,
                width: '85%',
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: 35,
              },
              left: {
                backgroundColor: palette.purple,
                width: '85%',
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: 35,
              }
            }
            }
          />
        );
      }}
      />
  )
    }
  

export default ChatInput;

