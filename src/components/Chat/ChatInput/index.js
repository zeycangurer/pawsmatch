import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Entypo
          style={styles.smileIcon}
          name="emoji-happy"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} />
      </View>
      <View style={styles.iconWrapper}>
        <Ionicons style={styles.backIcon} name="send" size={24} color="white" />
      </View>
    </View>
  )
}

export default ChatInput