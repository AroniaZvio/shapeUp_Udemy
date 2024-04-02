import { View, Text } from "react-native";
import React from "react";
import { useFonts, Caveat_700Bold } from "@expo-google-fonts/caveat";

const Welcome = () => {
  let [fontsLoaded] = useFonts({
    Caveat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

<<<<<<< HEAD
    return (
        <View>
            <Text style={{
                fontFamily: 'Caveat_700Bold',
                fontSize: 35,
                textAlign: "center",
                color: "#92400e",
            }}>BeFitnness</Text>
     
        </View>
    );
=======
  return (
    <View>
      <Text
        style={{
          fontFamily: "Caveat_700Bold",
          fontSize: 35,
          textAlign: "center",
          color: "#92400e",
        }}
      >
        BeFitness
      </Text>
    </View>
  );
>>>>>>> bb9a41182983345343c9bb016dcf22eb129adf5c
};

export default Welcome;
