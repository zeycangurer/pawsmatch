import {View, Text} from 'react-native';
import React from 'react';
import ChatHeader from '../../components/Chat/ChatHeader';
import ChatInput from '../../components/Chat/ChatInput';
import Messages from '../../components/Chat/Messages';


const ChatPage = () => {
  return (
    <View style={{flex:1}}>
      <ChatHeader />
      <Messages />
      <ChatInput />
    </View>
  );
};

export default ChatPage;
