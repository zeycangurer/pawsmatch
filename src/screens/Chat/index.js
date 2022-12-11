import {View} from 'react-native';
import React from 'react';
import ChatHeader from '../../components/Chat/ChatHeader';
import ChatInput from '../../components/Chat/ChatInput';

const ChatPage = () => {
  return (
    <View style={{flex: 1}}>
      <ChatHeader />
      <ChatInput />
    </View>
  );
};

export {ChatPage};
