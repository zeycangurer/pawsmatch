import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ChatListHeader from '../../components/ChatListHeader';
import { palette } from '../../theme/palette';

const ChatListPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, backgroundColor:palette.lightgrey}} >
      <ChatListHeader />
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('chat')}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png',
                }}
              />
            </View>
            <View style={styles.titleAndTextWrapper}>
              <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Betül Ceren Yetiz</Text>
                <Text style={styles.titleTime}>18.26</Text>
              </View>
              <Text style={styles.msgText}>Sea ben geldimmmmm</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ChatListPage;
