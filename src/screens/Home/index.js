import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {getPets} from '../../redux/actions';
import PetCard from '../../components/PetCard';

const HomePage = connect(
  states => ({app: states.app}),
  dispatch => ({dispatch}),
)(props => {
  const {app, dispatch} = props;
  const {pets} = app;
  const getPet = item => {
    dispatch(getPets(item));
  };
  useEffect(() => {
    getPet(app.selectedPet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app.selectedPet]);
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        renderItem={({item}) => {
          return (
            <View
              style={
                item.gender === 'female' ? styles.cardFemale : styles.cardMale
              }>
              <PetCard
                name={item.name}
                breed={item.breed}
                size={item.size}
                location={item.location}
                image={item.image}
              />
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                Please select the pet from the profile. If you selected a pet no
                matches were found.
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
});

export {HomePage};
