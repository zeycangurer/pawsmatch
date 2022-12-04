/* eslint-disable prettier/prettier */
import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { connect } from 'react-redux';

import {LoginStack} from './stacks/loginStack';
import {HomeStack} from './stacks/homeStack';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  return useMemo(
    () => <NavigationContainer>
      { props.app.isSigningUp || props.app.isSigningIn ? <HomeStack /> : <LoginStack /> }
    </NavigationContainer>,
    [props.app.isSigningUp, props.app.isSigningIn],
  );
});
export {Navigation};
