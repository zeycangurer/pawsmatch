import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ProfilePage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={() => navigation.navigate('addPet')}>Add Pet</Button>
    </View>
  );
};

export default ProfilePage;
