import { View, Text, Image, TextInput, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsIcon,
  SearchIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import Featured from '../components/Featured'

const Home = () => {
  const { setOptions } = useNavigation()
  useLayoutEffect(() => {
    setOptions({
      headerShown: false
    })
  }, [])
  return (
<SafeAreaView>
  <View className="pt-3 bg-white">
    <View className="flex-row pb-3 mx-4 space-x-2 items-center">
      <Image
        source={{
          uri: "https://github.com/marvelxcodes.png",
        }}
        className="aspect-square h-7 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
        <Text className="font-bold text-xl">
          Current Location
          <ChevronDownIcon size={20} color="#00CCBB" />
        </Text>
      </View>
      <UserIcon  size={35} color="#00CCBB" />
    </View>
    <View className="items-center flex-row space-x-2 pb-2 mx-4">
      <View className="flex-row items-center px-2 space-x-2 flex-1 bg-gray-200">
        <SearchIcon color="#00CCBB" />
        <TextInput
          className="py-2 text-gray-500 flex-1"
          placeholder='Restaurants and cuisines'
          keyboardType='default'
        />
      </View>
      <AdjustmentsIcon size={30} color="#00CCBB" />
    </View>
  </View>
  <ScrollView
    showsVerticalScrollIndicator={false}
    endFillColor="#00CCBB"
    className="mb-32"
  >
    <Categories />
    
    <Featured
      title="Featured"
      description="Paid placements from our partners"
    />
    <Featured
      title="Featured"
      description="Paid placements from our partners"
    />
    <Featured
      title="Featured"
      description="Paid placements from our partners"
    />
    <Featured
      title="Featured"
      description="Paid placements from our partners"
    />
    </ScrollView>
</SafeAreaView>
)}

export default Home