import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from '../../screens/Home';
import {AddPetPage} from '../../screens/AddPet';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="addPet" component={AddPetPage} />
    </Stack.Navigator>
  );
};

export {HomeStack};
