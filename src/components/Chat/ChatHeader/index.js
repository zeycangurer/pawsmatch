import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <View style={styles.titleWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              style={styles.backIcon}
              name="arrow-back"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png',
              }}
            />
          </View>
          <Text style={styles.titleText}>Betül Ceren Yetiz</Text>
        </View>
        <View style={styles.iconWrapper}>
          <IconEntypo name="dots-three-vertical" size={18} color="white" />
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;
