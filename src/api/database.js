import database from '@react-native-firebase/database';

export const addPet = async (pet, uid) => {
  const newPet = database().ref('/Pets').push();
  await newPet.set(pet);
  const key = newPet.key;
  await database()
    .ref(`/UserPets/${uid}`)
    .push()
    .set(key)
    .then(() => console.log('Data set with user.'));
  return newPet;
};

export const getPets = async () => {
  const pets = await (await database().ref('/Pets').once('value')).val();
  let allPets = [];
  Object.keys(pets).map(key => {
    allPets.push(pets[key]);
  });
  return allPets;
};

export const getPet = async id => {
  const pet = await (await database().ref(`/Pets/${id}`).once('value')).val();
  let myPets = [];
  Object.keys(pet).map(key => {
    myPets.push(pet[key]);
  });
  return myPets;
};

export const updatePet = async (id, pet) => {
  const updatedPet = await database().ref(`/Pets/${id}`).update(pet);
  return updatedPet;
};

export const deletePet = async id => {
  const deletedPet = await database().ref(`/Pets/${id}`).remove();
  return deletedPet;
};

export const chats = async chat => {
  const newChat = await database()
    .ref('/Chats')
    .push({
      ...chat,
    })
    .then(() => console.log('Data set.', chat));
  return newChat;
};
