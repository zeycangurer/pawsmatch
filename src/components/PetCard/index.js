import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {palette} from '../../theme/palette';

const PetCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContaier}>
        <Image source={{uri: props.image}} style={styles.image} />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.type}>Breed: {props.breed}</Text>
        <Text style={styles.description}>Description: {props.description}</Text>
      </View>
    </View>
  );
};

export default PetCard;
