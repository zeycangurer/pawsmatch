import {ScrollView, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';

const Messages = () => {
  return (
    <ImageBackground source={{uri: "https://img.freepik.com/premium-vector/seamless-pattern-with-colorful-paw-print-white-background-animal-print-vector-illustration_648830-157.jpg"}} resizeMode="cover" style={styles.image}>

    <ScrollView style={styles.container}>
      
          <View style={styles.dialog}>
            <Text style={styles.text}>Sea ben geldimmmmm</Text>
            <Text style={styles.time}>
              18.26
            </Text>
          </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default Messages