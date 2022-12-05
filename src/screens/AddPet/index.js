import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TextInput, RadioButton, Button} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {connect} from 'react-redux';
import {setPet, addPet} from '../../redux/actions';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const AddPetPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const {control, handleSubmit, errors} = useForm({
    defaultValues: {
      name: '',
      'pet-type': '',
      'pet-gender': '',
      age: '',
      'pet-breed': '',
      'pet-size': '',
      location: '',
      'pet-image': '',
      'pet-description': '',
    },
  });
  const onSubmit = data => {
    dispatch(setPet('name', data.name));
    dispatch(setPet('pet-type', data['pet-type']));
    dispatch(setPet('pet-gender', data['pet-gender']));
    dispatch(setPet('age', data.age));
    dispatch(setPet('pet-breed', data['pet-breed']));
    dispatch(setPet('pet-size', data['pet-size']));
    dispatch(setPet('location', data.location));
    dispatch(setPet('pet-image', data['pet-image']));
    dispatch(setPet('pet-description', data['pet-description']));
    dispatch(addPet());
  };
  return (
    <View style={styles.container}>
      <Text>AddPetPage</Text>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            label="Name"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{required: true}}
      />
      {errors.name && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <RadioButton.Group
            onValueChange={value => onChange(value)}
            value={value}>
            <RadioButton.Item label="Dog" value="dog" />
            <RadioButton.Item label="Cat" value="cat" />
          </RadioButton.Group>
        )}
        name="pet-type"
        rules={{required: true}}
      />
      {errors['pet-type'] && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <RadioButton.Group
            onValueChange={value => onChange(value)}
            value={value}>
            <RadioButton.Item label="Female" value="female" />
            <RadioButton.Item label="Male" value="male" />
          </RadioButton.Group>
        )}
        name="pet-gender"
        rules={{required: true}}
      />
      {errors['pet-gender'] && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            label="Age"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="age"
        rules={{required: true}}
      />
      {errors.age && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            label="Breed"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="pet-breed"
        rules={{required: true}}
      />
      {errors['pet-breed'] && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <RadioButton.Group
            onValueChange={value => onChange(value)}
            value={value}>
            <RadioButton.Item label="Small" value="small" />
            <RadioButton.Item label="Medium" value="medium" />
            <RadioButton.Item label="Large" value="large" />
          </RadioButton.Group>
        )}
        name="pet-size"
        rules={{required: true}}
      />
      {errors['pet-size'] && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            label="Location"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="location"
        rules={{required: true}}
      />
      {errors.location && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            label="Image"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="pet-image"
        rules={{required: true}}
      />
      {errors['pet-image'] && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            label="Description"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="pet-description"
      />
      <Button mode="contained" onPress={handleSubmit(data => onSubmit())}>
        Submit
      </Button>
    </View>
  );
});

export {AddPetPage};
