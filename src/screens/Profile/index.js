import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {signOut} from '../../redux/actions';
import {Avatar, Title, Subheading} from 'react-native-paper';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const navigation = useNavigation();
  return (
    <View style={{alignItems: 'center', marginTop: 16}}>
      <Avatar.Text label="ZG" />
      <Title>Zeycan</Title>
      <Subheading>z@gmail.com</Subheading>
      <Button
        onPress={() => {
          dispatch(signOut());
        }}>
        Sign Out
      </Button>
    </View>
  );
});

export default ProfilePage;
