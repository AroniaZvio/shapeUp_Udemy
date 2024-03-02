import { View, Text } from 'react-native';
import React from 'react';
import Welcome from '../Components/Welcome';
import { SafeAreaView } from 'react-native-safe-area-context';
import WorkoutOTD from "../Components/WorkoutOTD"; 
import Separator from '../Components/Separator';
import Category from '../Components/Category';

function WorkoutScreen() {
  return (
    <SafeAreaView>
      <Welcome />
      <WorkoutOTD />
      <Separator />
      <Category />
    </SafeAreaView>
  );
}

export default WorkoutScreen;