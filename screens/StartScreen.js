import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const StartScreen = ({ navigation }) => {
  const btnPressed = () => {
    console.log("Start button was pressed");
    navigation.navigate("Game");
  };
  return (
    <View style={styles.container}>
      <Text>Welcome to the start screen</Text>
      <TouchableWithoutFeedback
        style={styles.startBtnCont}
        onPress={btnPressed}
      >
        <Text style={styles.btnText}>Start Game</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  startBtnCont: {
    margin: 5,
  },
  btnText: {
    textAlign: "center",
    margin: 10,
    padding: 20,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
