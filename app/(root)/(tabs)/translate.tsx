import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

export default function translate() {
  const [inputLanguage, setInputLanguage] = useState("Input");
  const [outputLanguage, setOutputLanguage] = useState("Output");
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <SafeAreaView className='h-full bg-white'>
      <View className="flex-1 bg-white px-5 py-10">
        <Text className="font-rubik-bold text-3xl text-black text-absolute mb-5 mt-5">
          Choose the Languages.
        </Text>

        <View className="flex-row justify-between mb-5">
          <Picker
            selectedValue={inputLanguage}
            onValueChange={(itemValue: React.SetStateAction<string>) => setInputLanguage(itemValue)}
            className="flex-1 border border-black rounded-md mr-2 shadow-md shadow-black-300"
          >
            <Picker.Item label="Input" value="Input" />
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="French" value="French" />
            {/* Add more languages as needed */}
          </Picker>

          <Picker
            selectedValue={outputLanguage}
            onValueChange={(itemValue: React.SetStateAction<string>) => setOutputLanguage(itemValue)}
            className="flex-1 border border-black rounded-md ml-2 shadow-md shadow-black-300"
          >
            <Picker.Item label="Output" value="Output" />
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="French" value="French" />
            {/* Add more languages as needed */}
          </Picker>
        </View>

        <View className="border border-black rounded-lg p-5 mb-5 items-center bg-primary-200">
          <Pressable className="bg-primary-300 p-5 rounded-full">
            <Ionicons name="mic" size={24} color="white" />
          </Pressable>
        </View>

        <Pressable className="bg-primary-300 py-3 px-6 rounded-md self-center mb-5">
          <Text className="text-white font-rubik-bold text-lg">Translate</Text>
        </Pressable>

        <View className="border border-black rounded-lg p-5 items-center bg-primary-200">
          <Pressable
            className="bg-primary-300 p-5 rounded-full"
            onPress={togglePlay}
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={24}
              color="white"
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
