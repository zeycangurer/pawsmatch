import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {LoginStack} from './stacks/loginStack';
import {HomeStack} from './stacks/homeStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};
export {Navigation};
