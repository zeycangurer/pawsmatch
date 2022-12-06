import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux';
import {Navigation} from './navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
};

export default App;
