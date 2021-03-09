import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App: React.FC = () => {

  const buttons = ["AC", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "3", "2", "1", "+", "0", ".", "+/-", "="];

  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const clear = () => {
    setCurrentNumber("");
    setLastNumber("");
  };

  const onButtonPress = (buttonPressed: string) => {
    switch (buttonPressed) {
      case "AC":
        clear();
        return;
      default:
        setCurrentNumber(currentNumber + buttonPressed);
    }
  };

  return (
    <View>
      <View style={styles.visor}>
        <Text style={styles.visorHistory}>
          {lastNumber}
        </Text>
        <Text style={styles.visorResult}>
          {currentNumber}
        </Text>
      </View>
      <View style={styles.keyboard}>
        {
          buttons.map((button) =>
            <TouchableOpacity key={button} style={styles.button} onPress={() => onButtonPress(button)}>
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  visor: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 300,
    backgroundColor: "#f5f5f5"
  },
  visorHistory: {
    fontSize: 22,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: "flex-end"
  },
  visorResult: {
    fontWeight: "bold",
    fontSize: 80,
    margin: 10,
    alignSelf: "flex-end"
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    minHeight: 80,
    minWidth: 80
  },
  textButton: {
    color: "#5b5b5b",
    fontSize: 25
  }
});

export default App;
