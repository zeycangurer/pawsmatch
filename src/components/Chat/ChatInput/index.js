// import React, {useCallback, useLayoutEffect, useState} from 'react';
// import styles from './styles';

// import {GiftedChat, Bubble} from 'react-native-gifted-chat';
// import {palette} from '../../../theme/palette';
// import { connect } from 'react-redux';

// const mapStateToProps = states => ({app: states.app});
// const mapDispatchToProps = dispatch => ({dispatch});

// const ChatInput = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(props => {
//   const {app, dispatch} = props;
//   let source = '';
//   const [userId, setUserId] = useState('1');
//   const [date, setDate] = useState('21/09/2021');
//   const [message, setMessage] = useState('sea');
//   const [sender, setSender] = useState('Betul');

//   const onSend = useCallback((messages = []) => {
//     setMessage(previousMessage => GiftedChat.append(previousMessage, messages));
//     const {userId, date, message, sender} = messages[0];
//   }, []);

//   return (
//     <GiftedChat
//       messages={message}
//       showAvatarForEveryMessage={true}
//       showUserAvatar={false}
//       onSend={messages => onSend(message)}
//       messagesContainerStyle={{
//         backgroundColor: palette.lightblue,
//       }}
//       textInputStyle={{
//         color: palette.blue
//       }}
//       user={{
//         _id: userId,
//         name: sender,
//         createdAt: date,
//         //avatar:
//         //  'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png',
//       }}
//       renderBubble={props => {
//         return (
//           <Bubble
//             {...props}
//             wrapperStyle={{
//               right: {
//                 backgroundColor: palette.blue,
//                 width: '85%',
//                 alignItems: 'center',
//                 flexDirection: 'row',
//                 borderRadius: 35,
//               },
//               left: {
//                 backgroundColor: palette.purple,
//                 width: '85%',
//                 alignItems: 'center',
//                 flexDirection: 'row',
//                 borderRadius: 35,
//               },
//             }}
//           />
//         );
//       }}
//     />
//   );
// });


// export default ChatInput;

import { View, Text } from 'react-native'
import React from 'react'

const ChatInput = () => {
  return (
    <View>
      <Text>ChatInput</Text>
    </View>
  )
}

export default ChatInput
