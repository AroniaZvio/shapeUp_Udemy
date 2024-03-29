import { View, Text } from 'react-native'
import React from 'react'
import ExercizeItems from './ExercizeItems'

const Exercize = () => {
  return (
    <View>
      <View className="flex-row items-center justify-between mx-10 mb-3">
      <Text className="text-xl font-bold">Exercize</Text>
  </View>
  <ExercizeItems />
    </View>
  )
}

export default Exercize