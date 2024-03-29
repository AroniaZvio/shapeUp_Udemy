import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import otdImage from '../../assets/Images/workoutotd.jpg';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';

const WorkoutOTD = () => {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    // Return a loading state or a loader component if fonts are still loading
    return null;
  }

  return (
    <TouchableOpacity
      className="items-center justify-center"
    >
      <View className="rounded-3xl overflow-hidden h-40 w-[80%]">
        <ImageBackground
          source={otdImage}
          className="flex-1 justify-center items-center"
          resizeMode="cover"
        >
          <View>
            <Text
              className="text-white/70 text-3xl tracking-tighter"
              style={{ fontFamily: "Lato_400Regular" }}
            >
              Workout Of The Day 03_16_2024
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
export default WorkoutOTD;
