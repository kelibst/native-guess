import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableWithoutFeedbackBase,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import globalStyles from "../styles/globalStyles";

const genRan = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const GameScreen = () => {
  const [start, setStart] = useState(true);
  const [num, seNum] = useState(genRan(1, 99));
  const [selected, setSelected] = useState(0);
  const [mes, setMes] = useState(
    <Text style={styles.titleTxt}>I have a number, click to guess.</Text>
  );
  const [count, setCount] = useState(0);

  const playGame = (opt) => {
    !start && setStart(true);
    setCount(count + 1);
    setSelected(opt);
  };

  const [options, setOptions] = useState([
    num,
    genRan(10, 99),
    genRan(20, 99),
    genRan(30, 99),
    genRan(40, 99),
  ]);
  useEffect(() => {
    selected == num && console.log("You won");
    console.log(num, selected);
    if (count == 3 || count > 3) {
      setStart(false);
      setMes(
        <Text style={styles.titleTxt}>
          Sorry You lost. My number was{" "}
          <Text style={{ fontSize: 28, color: "blue" }}>{num}</Text>
        </Text>
      );
    } else if (count == 1) {
      const ranNum = genRan(30, 50);
      setMes(
        <Text style={styles.titleTxt}>
          my number +{" "}
          <Text style={{ fontSize: 28, color: "red" }}>{ranNum}</Text> ={" "}
          <Text style={{ fontSize: 28, color: "green" }}>{num + ranNum}</Text>
        </Text>
      );
    } else if (count == 2) {
      const newRan = genRan(5, 10);
      setMes(
        <Text style={styles.titleTxt}>
          my number times{" "}
          <Text style={{ fontSize: 28, color: "red" }}>{newRan}</Text> ={" "}
          <Text style={{ fontSize: 28, color: "green" }}>{num * newRan}</Text>
        </Text>
      );
    }
  }, [start, selected]);

  useEffect(() => {}, [count]);
  const userOpt = options.sort(() => Math.random() - 0.5);
  return (
    <View style={globalStyles.container}>
      {mes}
      <View style={styles.cont}>
        {start &&
          userOpt?.map((opt) => {
            return (
              <TouchableWithoutFeedback onPress={() => playGame(opt)}>
                <Text style={styles.btnText}>{opt}</Text>
              </TouchableWithoutFeedback>
            );
          })}
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  btnText: {
    textAlign: "center",
    margin: 10,
    padding: 15,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  cont: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleTxt: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
