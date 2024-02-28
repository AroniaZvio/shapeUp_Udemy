import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WorkoutScreen from "./src/Screens/WorkoutScreen";
import TimerScreen from "./src/Screens/TimerScreen";
import CalculationScreen from "./src/Screens/CalculationScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Timer":
                iconName = "timer-outline";
                return <Ionicons name={iconName} size={size} color={color} />;

              case "CalculationScreen": // Corrected route name
                iconName = "calculator-outline"; // Corrected icon name
                return <Ionicons name={iconName} size={size} color={color} />;
               
              case "Workout": // Corrected route name
                iconName = "dumbbell";
                return <MaterialCommunityIcons name={iconName} size={24} color={color} />;  

              default:
                iconName = "circle"; // Default icon if route name doesn't match
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            }
          },
          tabBarShowLabel: false, 
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'black', 
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingVertical: 5,
          },
          tabBarActiveTintColor: "aqua",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen name='Workout' component={WorkoutScreen} />
        <Tab.Screen name='Timer' component={TimerScreen} />
        <Tab.Screen name='CalculationScreen' component={CalculationScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabNav' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
