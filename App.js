import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartNavigator from "./navigations/StartNavigator";
import StartScreen from "./screens/StartScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StartNavigator />
      <StatusBar />
    </NavigationContainer>
  );
}
