import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../../screens/Home';
import {AddPetPage} from '../../screens/AddPet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import ChatPage from '../../screens/Chat';
import ProfilePage from '../../screens/Profile';

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Ionicons
              name={
                route.name === 'profile'
                  ? 'person'
                  : route.name === 'home'
                  ? 'home'
                  : 'chatbubbles'
              }
              color={color}
              size={size}
            />
          );
        },
        tabBarActiveTintColor: palette.orange,
        tabBarInactiveTintColor: palette.yellow,
      })}>
      <Tab.Screen name="profile" component={ProfilePage} />
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="chat" component={ChatPage} />
    </Tab.Navigator>
  );
};

export default MainTab;
