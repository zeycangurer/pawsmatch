import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux';
import {Navigation} from './navigation';
import {NavigationContainer} from '@react-navigation/native';



const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </View>
    </NavigationContainer>
  );
};

export default App;
