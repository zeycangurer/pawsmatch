/* eslint-disable prettier/prettier */
import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { connect } from 'react-redux';

import {LoginStack} from './stacks/loginStack';
import {HomeStack} from './stacks/homeStack';
import {SignUpStack} from './stacks/signuptosignin';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  return useMemo(
    () => <NavigationContainer>
      {props.app.isSigningIn ? <HomeStack /> :
      props.app.isSigningUp ? <SignUpStack /> : <LoginStack/>}
    </NavigationContainer>,
    [props.app.isSigningUp, props.app.isSigningIn],
  );
});
export {Navigation};
