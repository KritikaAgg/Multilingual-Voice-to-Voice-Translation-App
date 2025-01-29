import React from "react";
import { ImageBackground, Text, View } from "react-native";
import images from '@/constants/images';

export default function Index() {
  return (
    <ImageBackground
      source={images.background}
      className="flex-1 w-full h-full"
      resizeMode="cover"
    >
      <View className="flex-1 justify-center items-center px-5">
        <Text className="font-rubik-extrabold text-4xl text-black text-center mb-5 w-4/5">
          Welcome to the Translator.
        </Text>
        <Text className="font-rubik-bold text-2xl text-accent-100 text-center w-4/5">
          Break the Language Barrier.
        </Text>
      </View>
    </ImageBackground>
  );
}
