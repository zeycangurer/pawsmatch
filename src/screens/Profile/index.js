import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {signOut} from '../../redux/actions';
import {Avatar, Title, Subheading} from 'react-native-paper';
import PetCard from '../../components/PetCard';
import styles from './styles';
import {palette} from '../../theme/palette';
import {getPet} from '../../redux/actions';

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
  console.log('mypets', myPet);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Avatar.Text label="ZG" style={{backgroundColor: palette.blue}} />
      <Title>Zeycan</Title>
      <Subheading>z@gmail.com</Subheading>
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
      />
      <Button
        onPress={() => {
          navigation.navigate('addPet');
        }}>
        Add Pet
      </Button>
    </View>
  );
});

export default ProfilePage;