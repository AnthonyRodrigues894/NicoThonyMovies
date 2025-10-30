import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import {styles} from '../theme'
import { useNavigation } from '@react-navigation/native'

var { widht, height } = Dimensions.get('window');

export default function MovieList() {
  return (
    <View>
      <Text>movieList</Text>
    </View>
  )
}