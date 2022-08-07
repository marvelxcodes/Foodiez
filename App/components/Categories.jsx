import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
<ScrollView
  horizontal className="mx-3 mt-3"
  showsHorizontalScrollIndicator={false}
>
  <CategoryCard imgUrl="https:links.papareact.com/gn7" title="Testing 1" />
  <CategoryCard imgUrl="https:links.papareact.com/gn7" title="Testing 2" />
  <CategoryCard imgUrl="https:links.papareact.com/gn7" title="Testing 3" />
  <CategoryCard imgUrl="https:links.papareact.com/gn7" title="Testing 4" />
  <CategoryCard imgUrl="https:links.papareact.com/gn7" title="Testing 5" />
</ScrollView>
)}

export default Categories

const CategoryCard = ({title, imgUrl}) => {
  return (
<TouchableOpacity className="relative mx-1.5">
  <View>
      <Image
      className="h-20 w-20 rounded"
      source={{ uri: imgUrl }}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
  </View>
</TouchableOpacity>
)}