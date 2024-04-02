import { View, Text } from "react-native";
import React from "react";
<<<<<<< HEAD
import { AntDesign } from "@expo/vector-icons";
=======
import { AntDesign } from '@expo/vector-icons';
>>>>>>> bb9a41182983345343c9bb016dcf22eb129adf5c
import CategoryItems from "./CategoryItems";

const Category = () => {
  return (
    <View>
      <View className="flex-row items-center justify-between mx-10 mb-3">
<<<<<<< HEAD
        <Text className="text-xl font-bold">Categories</Text>
        <AntDesign name="swapright" size={30} color="black" />
      </View>

      <CategoryItems />
=======
      <Text className="text-xl font-bold">Category</Text>
      <AntDesign name="swapright" size={24} color="black" />
        </View>
        <CategoryItems />
>>>>>>> bb9a41182983345343c9bb016dcf22eb129adf5c
    </View>
  );
};

export default Category;
<<<<<<< HEAD
=======



>>>>>>> bb9a41182983345343c9bb016dcf22eb129adf5c
