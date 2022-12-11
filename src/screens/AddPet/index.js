import React, {useState} from 'react';
import {ScrollView, View, Text, Alert} from 'react-native';
import styles from './styles';
import {TextInput, RadioButton, Button, HelperText} from 'react-native-paper';
import {connect} from 'react-redux';
import {setPet, addPet} from '../../redux/actions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {palette} from '../../theme/palette';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const AddPetPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  let source = '';
  const [petType, setPetType] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petSize, setPetSize] = useState('');
  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const handleCamera = () => {
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        Alert.alert('Error', 'Please select an image');
      } else if (response.error) {
        Alert.alert('Error', response.error);
        console.log('Error: ', response.error);
      } else if (response.customButton) {
        Alert.alert('Error', 'Please select an image');
        console.log('User tapped custom button: ', response.customButton);
      } else {
        source = {uri: response.assets[0].uri};
        console.log('source', source.uri);
        dispatch(setPet('image', source.uri));
      }
    });
  };

  const handleGallery = () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        Alert.alert('Error', 'Please select an image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert('Error', 'Please select an image');
      } else {
        source = {uri: response};
        console.log('source', source.uri);
        dispatch(setPet('image', source.uri));
      }
    });
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Pet</Text>
      <TextInput
        label="Name"
        mode="outlined"
        value={app.pet.name}
        onChangeText={text => dispatch(setPet('name', text))}
      />
      <HelperText
        style={styles.error}
        type="error"
        visible={app.pet.name === ''}>
        Please enter a name
      </HelperText>
      <RadioButton.Group
        onValueChange={value => {
          dispatch(setPet('type', value));
          setPetType(value);
        }}
        value={(app.pet.type, petType)}>
        <Text style={styles.radioTitle}>My pet is a ...</Text>
        <View style={styles.radioGroup}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioLabel}>Dog</Text>
            <RadioButton value="dog" />
          </View>
          <View style={styles.radioContainer}>
            <Text style={styles.radioLabel}>Cat</Text>
            <RadioButton value="cat" />
          </View>
        </View>
      </RadioButton.Group>
      <HelperText
        style={styles.error}
        type="error"
        visible={app.pet.type === ''}>
        Please select a type
      </HelperText>
      <RadioButton.Group
        onValueChange={value => {
          dispatch(setPet('gender', value));
          setPetGender(value);
        }}
        value={(app.pet.gender, petGender)}>
        <Text style={styles.radioTitle}>Gender is ...</Text>
        <View style={styles.radioGroup}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioLabel}>Female</Text>
            <RadioButton value="female" />
          </View>
          <View style={styles.radioContainer}>
            <Text style={styles.radioLabel}>Male</Text>
            <RadioButton value="male" />
          </View>
        </View>
      </RadioButton.Group>
      <HelperText
        style={styles.error}
        type="error"
        visible={app.pet.gender === ''}>
        Please select the gender
      </HelperText>
      <TextInput
        label="Breed"
        mode="outlined"
        value={app.pet.breed}
        onChangeText={text => dispatch(setPet('breed', text))}
      />
      <HelperText
        style={styles.error}
        type="error"
        visible={app.pet.breed === ''}>
        Please enter a breed
      </HelperText>
      <TextInput
        label="Age"
        mode="outlined"
        value={app.pet.age}
        onChangeText={text => dispatch(setPet('age', text))}
      />
      <HelperText
        style={styles.error}
        type="error"
        visible={app.pet.age === ''}>
        Please enter an age
      </HelperText>
      <RadioButton.Group
        onValueChange={value => {
          dispatch(setPet('size', value));
          setPetSize(value);
        }}
        value={(app.pet.size, petSize)}>
        <Text style={styles.radioTitle}>Size is ...</Text>
        <View style={styles.radioGroup}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioLabel}>Small</Text>
            <RadioButton value="Small" />
          </View>
          <View style={styles.radioContainer}>
            <Text style={styles.radioLabel}>Medium</Text>
            <RadioButton value="Medium" />
          </View>
          <View style={styles.radioContainer}>
            <Text style={styles.radioLabel}>Large</Text>
            <RadioButton value="Large" />
          </View>
        </View>
      </RadioButton.Group>
      <HelperText
        style={styles.error}
        type="error"
        visible={app.pet.size === ''}>
        Please select the size
      </HelperText>
      <TextInput
        label="Location"
        mode="outlined"
        value={app.pet.location}
        onChangeText={text => dispatch(setPet('location', text))}
      />
      <HelperText
        style={styles.error}
        type="error"
        visible={app.pet.location === ''}>
        Please enter a location
      </HelperText>
      <Text style={styles.radioTitle}>Add Image</Text>
      <View style={styles.button_container}>
        <Button onPress={handleCamera} mode="contained" style={styles.button}>
          Camera
        </Button>
        <Button onPress={handleGallery} mode="contained" style={styles.button}>
          Gallery
        </Button>
      </View>
      <HelperText
        style={styles.error}
        type="error"
        visible={app.pet.image === ''}>
        Please add an image
      </HelperText>
      <TextInput
        label="Description"
        mode="outlined"
        value={app.pet.description}
        onChangeText={text => dispatch(setPet('description', text))}
      />
      <Button
        disabled={
          app.pet.name === '' ||
          app.pet.type === '' ||
          app.pet.gender === '' ||
          app.pet.breed === '' ||
          app.pet.age === '' ||
          app.pet.size === '' ||
          app.pet.location === '' ||
          app.pet.image === ''
        }
        mode="contained"
        onPress={() => dispatch(addPet()) && props.navigation.navigate('home')}
        style={
          (styles.button,
          {alignSelf: 'center', marginTop: 10, marginBottom: 40})
        }>
        Add Pet
      </Button>
    </ScrollView>
  );
});

export {AddPetPage};
