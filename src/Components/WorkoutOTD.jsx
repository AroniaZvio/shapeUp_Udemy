import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import otdImage from '../../assets/images/workoutotd.jpg';
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
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={otdImage}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Workout of Day 35</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  },
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    height: 200,
    width: '80%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontFamily: 'Lato_400Regular',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default WorkoutOTD;
