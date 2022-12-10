import auth from '@react-native-firebase/auth';

export const signIn = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = () => {
  const user = auth().currentUser.uid;
  return user;
};
