import { View, Text } from 'react-native';
import React from 'react';
import Welcome from '../Components/Welcome';
import { SafeAreaView } from 'react-native-safe-area-context';
import WorkoutOTD from "../Components/WorkoutOTD"; 

function WorkoutScreen() {
  return (
    <SafeAreaView>
      <Welcome />
      <WorkoutOTD />
    </SafeAreaView>
  );
}

export default WorkoutScreen;