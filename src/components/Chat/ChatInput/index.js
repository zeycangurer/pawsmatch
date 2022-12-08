import {View, TextInput} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {GiftedChat} from 'react-native-gifted-chat';
import {palette} from '../../../theme/palette';

const ChatInput = () => {
  const [messages, setMessages] = useState([]);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    // setMessages([...messages, ...messages]);
    const {_id, createdAt, text, user} = messages[0];
  }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.inputBox}>
        <Entypo
          style={styles.smileIcon}
          name="emoji-happy"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} />
      </View> */}
      {/* <View style={styles.iconWrapper}> */}
      {/* <Ionicons style={styles.sendIcon} name="send" size={24} color="white" /> */}
      {/* <GiftedChat
         messages={messages}
         showAvatarForEveryMessage={true}
         showUserAvatar={false}
         onSend={messages => onSend(messages)}
         messagesContainerStyle={{
            backgroundColor: palette.lightgrey
         }}
         textInputStyle={{
          backgroundColor: palette.darkgrey,
          borderRadius: 30,
         }}
         user={{
          _id: 1,
          name: 'Betül Ceren Yetiz',
          avatar: 'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png',
        }}
         /> */}
      {/* </View> */}
    </View>
  );
};

export default ChatInput;
