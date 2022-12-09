import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { palette } from '../../theme/palette'

const PetCard = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:palette.lightgrey, fontWeight:'bold', fontSize:20}}>Vesta</Text>
    </View>
  )
}

export default PetCard