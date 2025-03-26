import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TranslateScreen() {
  const [inputLanguage, setInputLanguage] = useState("Input");
  const [outputLanguage, setOutputLanguage] = useState("Output");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMicPressed, setIsMicPressed] = useState(false);
  const [isTranslatePressed, setIsTranslatePressed] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMic = () => {
    setIsMicPressed(!isMicPressed); // Toggle mic press state
  };

  return (
    <SafeAreaView className='h-full bg-white'>
      <View className="flex-1 bg-white px-5 py-10">
        <Text className="font-rubik-bold text-3xl text-black mb-5 mt-5">
          Choose the Languages.
        </Text>

        <View className="flex-row justify-between mb-5">
          <View className="flex-1 mr-2">
            <Text className="font-rubik-bold text-lg text-black mb-2">Input Language</Text>
            <View className="border border-black rounded-lg shadow-lg bg-white overflow-hidden">
              <Picker
                selectedValue={inputLanguage}
                onValueChange={(itemValue) => setInputLanguage(itemValue)}
                style={{ height: 50, width: "100%" }}
              >
                <Picker.Item label="Select a language" value="" />
                <Picker.Item label="English" value="English" />
                <Picker.Item label="Spanish" value="Spanish" />
                <Picker.Item label="French" value="French" />
              </Picker>
            </View>
          </View>

          <View className="flex-1 ml-2">
            <Text className="font-rubik-bold text-lg text-black mb-2">Output Language</Text>
            <View className="border border-black rounded-lg shadow-lg bg-white overflow-hidden">
              <Picker
                selectedValue={outputLanguage}
                onValueChange={(itemValue) => setOutputLanguage(itemValue)}
                style={{ height: 50, width: "100%" }}
              >
                <Picker.Item label="Select a language" value="" />
                <Picker.Item label="English" value="English" />
                <Picker.Item label="Spanish" value="Spanish" />
                <Picker.Item label="French" value="French" />
              </Picker>
            </View>
          </View>
        </View>

        <View className="border border-black rounded-lg p-10 mb-5 items-center bg-primary-200">
          <Pressable
            className={`p-7 rounded-full ${isMicPressed ? 'bg-[#69C3FF]' : 'bg-primary-300'}`}
            onPress={toggleMic} // Toggle mic state on press
          >
            <Ionicons name="mic" size={30} color="white" />
          </Pressable>
        </View>

        <Pressable
          className={`py-4 px-8 rounded-md self-center mb-5 ${isTranslatePressed ? 'bg-[#69C3FF]' : 'bg-primary-300'}`}
          onPressIn={() => setIsTranslatePressed(true)}
          onPressOut={() => setIsTranslatePressed(false)}
        >
          <Text className="text-white font-rubik-bold text-xl">Translate</Text>
        </Pressable>

        <View className="border border-black rounded-lg p-10 items-center bg-primary-200">
          <Pressable
            className={`p-7 rounded-full ${isPlaying ? 'bg-[#69C3FF]' : 'bg-primary-300'}`}
            onPress={togglePlay}
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={30}
              color="white"
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
