import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {signOut} from '../../redux/actions';
import {Avatar, Title, Subheading} from 'react-native-paper';
import { AddPetPage } from '../AddPet';
import PetCard from '../../components/PetCard';
import styles from './styles';
import { palette } from '../../theme/palette';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Avatar.Text label="ZG" style={{backgroundColor:palette.blue}}/>
      <Title>Zeycan</Title>
      <Subheading>z@gmail.com</Subheading>
      <Button
        onPress={() => {
          dispatch(signOut());
        }}>
        Sign Out
      </Button>
      <Title style={styles.petsTitle}>Minik Dostların</Title>
      <PetCard />
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
