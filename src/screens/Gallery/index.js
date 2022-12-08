import React from 'react';
import {View, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const GalleryPage = () => {
  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const handleCamera = () => {
    launchCamera(options, response => {
      console.log('Response = ', response);
    });
  };

  const handleGallery = () => {
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
    });
  };

  return (
    <View>
      <Text>Gallery Page</Text>
      <Text onPress={handleCamera}>Camera</Text>
      <Text onPress={handleGallery}>Gallery</Text>
    </View>
  );
};

export {GalleryPage};
