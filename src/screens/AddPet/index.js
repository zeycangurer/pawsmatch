import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TextInput, RadioButton, Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {setPet, addPet} from '../../redux/actions';
import {useNavigation} from '@react-navigation/native';
import {palette} from '../../theme/palette';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const AddPetPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const [petType, setPetType] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petSize, setPetSize] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Pet</Text>
      <TextInput
        label="Name"
        mode="outlined"
        style={styles.input_area}
        outlineColor={palette.blue}
        textColor={palette.blue}
        activeOutlineColor={palette.blue}
        value={app.pet.name}
        onChangeText={text => dispatch(setPet('name', text))}
      />
      <RadioButton.Group
        onValueChange={value => {
          dispatch(setPet('pet-type', value));
          setPetType(value);
        }}
        value={(app.pet['pet-type'], petType)}>
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Dog</Text>
          <RadioButton value="dog" />
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Cat</Text>
          <RadioButton value="cat" />
        </View>
      </RadioButton.Group>
      <RadioButton.Group
        onValueChange={value => {
          dispatch(setPet('pet-gender', value));
          setPetGender(value);
        }}
        value={(app.pet['pet-gender'], petGender)}>
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Female</Text>
          <RadioButton value="female" />
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Male</Text>
          <RadioButton value="male" />
        </View>
      </RadioButton.Group>
      <TextInput
        label="Breed"
        value={app.pet.breed}
        onChangeText={text => dispatch(setPet('breed', text))}
      />
      <TextInput
        label="Age"
        value={app.pet.age}
        onChangeText={text => dispatch(setPet('age', text))}
      />
      <RadioButton.Group
        onValueChange={value => {
          dispatch(setPet('pet-size', value));
          setPetSize(value);
        }}
        value={(app.pet['pet-size'], petSize)}>
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Small</Text>
          <RadioButton value="small" />
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Medium</Text>
          <RadioButton value="medium" />
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Large</Text>
          <RadioButton value="large" />
        </View>
      </RadioButton.Group>
      <TextInput
        label="Location"
        value={app.pet.location}
        onChangeText={text => dispatch(setPet('location', text))}
      />
      <Button
        onPress={() => navigation.navigate('gallery')}
        mode="contained"
        style={styles.button}>
        Upload Image
      </Button>
      <TextInput
        label="Image"
        value={app.pet.image}
        onChangeText={text => dispatch(setPet('image', text))}
      />
      <TextInput
        label="Description"
        value={app.pet.description}
        onChangeText={text => dispatch(setPet('description', text))}
      />
      <Button
        mode="contained"
        onPress={() => dispatch(addPet())}
        style={styles.button}>
        Add Pet
      </Button>
    </View>
  );
});

export {AddPetPage};
