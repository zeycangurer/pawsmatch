import database from '@react-native-firebase/database';

export const addPet = async pet => {
  const newPet = await database().ref('/Pets').push();
  newPet.set(pet);
};

export const getPets = async () => {
  const pets = await database().ref('/Pets').once('value');
  return pets.val();
};

export const getPet = async id => {
  const pet = await database().ref(`/Pets/${id}`).once('value');
  return pet.val();
};

export const updatePet = async (id, pet) => {
  const updatedPet = await database().ref(`/Pets/${id}`).update(pet);
  return updatedPet;
};

export const deletePet = async id => {
  const deletedPet = await database().ref(`/Pets/${id}`).remove();
  return deletedPet;
};
