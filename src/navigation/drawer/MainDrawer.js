import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AddPetPage} from '../../screens/AddPet';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="addPet" component={AddPetPage} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
