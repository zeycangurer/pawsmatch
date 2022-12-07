import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from '../tabs/MainTab';
//import MainDrawer from '../drawer/MainDrawer';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="mainTab" component={MainTab} />
      {/* <Stack.Screen name='mainDrawer' component={MainDrawer} /> */}
    </Stack.Navigator>
  );
};

export {HomeStack};
