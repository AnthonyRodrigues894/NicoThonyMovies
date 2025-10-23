import React from 'react'
import { View, Text, Dimensions } from 'react-native'

var {width, height } = Dimensions.get('window');

export default function TrendingMovies({data}) {
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4">Em alta</Text>
      
    </View>
  )
}