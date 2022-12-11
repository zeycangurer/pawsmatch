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

export const getPets = async payload => {
  const pets = await (await database().ref('/Pets').once('value')).val();
  const {breed, gender, location, size, type, id} = payload;
  let allPets = [];
  Object.keys(pets).map(key => {
    allPets.push({...pets[key], id: key});
  });
  return allPets.filter(
    pet =>
      pet.breed === breed &&
      pet.gender === gender &&
      pet.location === location &&
      pet.size === size &&
      pet.type === type &&
      pet.id !== id,
  );
};

export const getPet = async (payload, uid) => {
  const pet = await (
    await database().ref(`/UserPets/${uid}`).once('value')
  ).val();
  const pets = await (await database().ref('/Pets').once('value')).val();
  let myPets = [];
  Object.values(pet).map(petKey =>
    Object.keys(pets)
      .filter(key => key === petKey)
      .map(key => {
        myPets.push({...pets[key], id: petKey});
      }),
  );
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

