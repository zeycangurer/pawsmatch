import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomePage} from '../../screens/Home';
import {AddPetPage} from '../../screens/AddPet';

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="addPet" component={AddPetPage} />
    </Tab.Navigator>
  );
};

export default MainTab