import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../../screens/Home';
import {AddPetPage} from '../../screens/AddPet';
import Foundation from 'react-native-vector-icons/Foundation';
import {palette} from '../../theme/palette';

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Foundation
              name={route.name === 'addPets' ? 'paw' : 'home'}
              color={color}
              size={size}
            />
          );
        }, 
        tabBarActiveTintColor: palette.orange,
        tabBarInactiveTintColor: palette.yellow,
      })}>
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="addPets" component={AddPetPage} />
    </Tab.Navigator>
  );
};

export default MainTab;
