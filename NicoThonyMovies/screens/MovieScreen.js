import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import { LinearGradient } from 'expo-linear-gradient'

var {width, height } = Dimensions.get('window');

export default function MovieScreen() {
    const { params: item } = useRoute();
    const [isFavorite, toggleFavorite] = useState(false);
    const navigation = useNavigation();
    let movieName = "Joker: Folie à Deux";
    useEffect(() => {
        //call API
    }, [item])

  return (
    <ScrollView
    contentContainerStyle={{ paddingBottom: 20, minHeight: '100%' }}
    className="flex-1 bg-neutral-900"
    >
        <View className="w-full">
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-betweem items-center p-4 pt-3"}>
               <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="roubded=xl p-1">
                <ChevronLeftIcon size="28" strokeWidth={2.5} color ="white" />
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => toggleFavorite(! isFavorite)}>
                    <HeartIcon size="36" color={isFavorite ? theme.background : "white"} />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
            <Image
              source={require('../assets/images/moviePoster2.jpg')}

    </ScrollView>
  )
}