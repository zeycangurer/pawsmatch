import React, {useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {signOut} from '../../redux/actions';
import {Text, Title} from 'react-native-paper';
import PetCard from '../../components/PetCard';
import styles from './styles';
import {palette} from '../../theme/palette';
import {getPet, selectedPet} from '../../redux/actions';
import auth from '@react-native-firebase/auth';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const {myPet} = app;
  const getMyPet = () => {
    dispatch(getPet());
  };
  useEffect(() => {
    getMyPet();
  }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {auth().currentUser.email}!</Text>
      <Button
        onPress={() => {
          navigation.navigate('addPet');
        }}>
        Add Pet
      </Button>
      <Button
        onPress={() => {
          dispatch(signOut());
        }}>
        Sign Out
      </Button>
      <Title style={styles.petsTitle}>Your Pets</Title>
      <FlatList
        data={myPet}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                dispatch(selectedPet(item));
              }}>
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
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
});

export default ProfilePage;
