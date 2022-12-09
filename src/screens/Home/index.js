import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-deck-swiper';
import {palette} from '../../theme/palette';
import {connect} from 'react-redux';
import {getPets} from '../../redux/actions';

const HomePage = connect(
  states => ({app: states.app}),
  dispatch => ({dispatch}),
)(props => {
  const {app, dispatch} = props;
  let {pets} = app;
  const getPet = () => {
    console.log('getPet');
    pets = dispatch(getPets());
  };
  return (
    <View style={styles.container}>
      <Swiper
        cards={[pets]}
        renderCard={card => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card.name}</Text>
            </View>
          );
        }}
        onSwiped={cardIndex => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        cardIndex={0}
        backgroundColor={palette.purple}
        stackSize={3}
      />
    </View>
  );
});

export {HomePage};
