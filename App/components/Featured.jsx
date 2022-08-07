import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    ArrowRightIcon,
    StarIcon,
    LocationMarkerIcon
} from 'react-native-heroicons/outline'

const RestaurantData = {
    id: "123",
    imageUrl: "https://links.papareact.com/gn7",
    title: "Yo! Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main Street",
    description:"This is a Test Description",
    dishes: [],
    long:20,
    lat:20
}

const Featured = ({title, description}) => {
  return (
<View className="mt-3">
    <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
    </View>
    <Text className="text-xs text-gray-500 px-4">{description}</Text>
    <ScrollView horizontal
    contentContainerStyle={{
        paddingHorizontal: 15
    }}
    showsHorizontalScrollIndicator={false}
    className="pt-4"
    >
        <RestaurantCard {...RestaurantData} />
        <RestaurantCard {...RestaurantData} />
        <RestaurantCard {...RestaurantData} />
    </ScrollView>
</View>
)}

export default Featured

const RestaurantCard = (props) => {
  return (
<TouchableOpacity className="mx-1.5 bg-white rounded">
  <Image 
    source={{
        uri: props.imageUrl
    }}
    className="h-36 w-64 rounded-sm"
  />
  <View className="p-5">
    <Text className="font-bold text-lg pt-2">{props.title}</Text>
    <View className="flex-row items-center space-x-1">
        <StarIcon color="green" opacity={0.5} size={22} />
        <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{props.rating}</Text> • {props.genre}
        </Text>
    </View>
    <View className="flex-row items-center space-x-1">
        <LocationMarkerIcon color="gray" size={22} />
        <Text className="text-xs text-gray-500">Nearby • {props.address}</Text>
    </View>
  </View>
</TouchableOpacity>
)}