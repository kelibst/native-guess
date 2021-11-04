import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "../screens/GameScreen";
import StartScreen from "../screens/StartScreen";

const Stack = createNativeStackNavigator();

const StartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Start"
      component={StartScreen}
      options={{ title: "Start Game" }}
    />

    <Stack.Screen
      name="Game"
      component={GameScreen}
      options={{ title: "Playing Game" }}
    />
  </Stack.Navigator>
);

export default StartNavigator;
