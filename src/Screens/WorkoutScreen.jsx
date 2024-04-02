<<<<<<< HEAD
import { View, Text } from "react-native";
import React from "react";
import Welcome from "../Components/Welcome";
import { SafeAreaView } from "react-native-safe-area-context";
import WorkoutOTD from "../Components/WorkoutOTD";
import Separator from "../Components/Separator";
import Category from "../Components/Category";
import Exercize from "../Components/Exercize";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
=======
import { View, Text } from 'react-native';
import React from 'react';
import Welcome from '../Components/Welcome';
import { SafeAreaView } from 'react-native-safe-area-context';
import WorkoutOTD from "../Components/WorkoutOTD"; 
import Separator from '../Components/Separator';
import Category from '../Components/Category';
import Exercize from '../Components/Exercize';
>>>>>>> bb9a41182983345343c9bb016dcf22eb129adf5c

const WorkoutScreen = () => {
  return (
    <SafeAreaView className="mx-[1%]">
      <Welcome />
<<<<<<< HEAD
      <GestureHandlerRootView>
        <ScrollView>
          <WorkoutOTD />
          <Separator />
          <Category />
          <Separator />
          <Exercize />
        </ScrollView>
      </GestureHandlerRootView>
=======
      <WorkoutOTD />
      <Separator />
      <Category />
      <Separator />
      <Exercize />
>>>>>>> bb9a41182983345343c9bb016dcf22eb129adf5c
    </SafeAreaView>
  );
};

export default WorkoutScreen;
