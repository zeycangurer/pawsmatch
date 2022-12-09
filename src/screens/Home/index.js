import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-deck-swiper';
import {palette} from '../../theme/palette';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={[
          'DO',
          'MORE',
          'OF',
          'WHAT',
          'MAKES',
          'YOU',
          'HAPPY',
          'DO',
          'MORE',
          'OF',
          'WHAT',
          'MAKES',
          'YOU',
          'HAPPY',
        ]}
        renderCard={card => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
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

    // <View style={styles.container}>
    //   <Text>HomePage</Text>
    // </View>
  );
};

export {HomePage};
