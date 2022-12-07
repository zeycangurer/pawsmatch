import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const ChatListHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Paws Chat</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatListHeader;
