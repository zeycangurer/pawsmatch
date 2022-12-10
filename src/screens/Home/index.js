import React, {useEffect} from 'react';
import {View, Text, Button, FlatList, Image} from 'react-native';
import styles from './styles';
import {palette} from '../../theme/palette';
import {connect} from 'react-redux';
import {getPets} from '../../redux/actions';
import PetCard from '../../components/PetCard';

const HomePage = connect(
  states => ({app: states.app}),
  dispatch => ({dispatch}),
)(props => {
  const {app, dispatch} = props;
  const {pets} = app;
  const getPet = () => {
    dispatch(getPets());
  };
  useEffect(() => {
    getPet();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        renderItem={({item}) => {
          console.log('item ', item);
          return (
            <View
              style={
                item.gender === 'female' ? styles.cardFemale : styles.cardMale
              }>
              <PetCard
                name={item.name}
                breed={item.breed}
                description={item.description}
                image={item.image}
              />
            </View>
          );
        }}
      />
    </View>
  );
});

export {HomePage};
