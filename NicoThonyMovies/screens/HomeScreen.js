import React from 'react'
import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'react-native'
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme'

const ios = Plataform.OS == 'ios';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      <View className={ios ? "-mb-2" : "mb-3"}>
      <StatusBar style='light' />
      <View className="flex-row justify-between items-center mx-4 mt-2">
        <TouchableOpacity>
          <Bars3BottomLeftIcon size={30} strokeWidth={2} color="white" />
        </TouchableOpacity>
      <Text className="text-white text-3xl font-bold">
        <Text style={styles.text}>Nicothony</Text>Movies
        </Text>
        <TouchableOpacity>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
        </TouchableOpacity>
          </View>
        </View>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        >

        </ScrollView>
    </View>
  )
}