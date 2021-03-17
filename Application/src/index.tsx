import React, { useEffect, useState } from "react";
import { Alert, Platform, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { NumberFormat } from "./utils/Format";

const App: React.FC = () => {

  const buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "AC", "0", "←"];
  const operations = ["/", "×", "-", "+"];

  const [currentNumber, setCurrentNumber] = useState("0");
  const [historicNumber, setHistoricNumber] = useState<Array<String>>([]);

  useEffect(() => {
    let formatted = NumberFormat(Number(currentNumber), 0, ",", ".");
  }, [currentNumber]);

  function clear() {
    setCurrentNumber("0");
    setHistoricNumber([]);
  }

  function backspace() {
    setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
  }

  function toast(message: string) {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }
  }

  const onButtonPress = (buttonPressed: string) => {
    let isLeftZero = currentNumber.concat(buttonPressed).charAt(0) == "0";
    let isPressedZero = buttonPressed == "0";
    let lastChar = currentNumber.charAt(currentNumber.length - 1);
    let isLastCharOperator = operations.indexOf(lastChar) > -1;
    let hasOperationClicked = (operations.indexOf(buttonPressed) > -1 && operations.indexOf(lastChar) > -1);

    switch (buttonPressed) {
      case "AC":
        clear();
        return;
      case "←":
        backspace();
        return;
      case "=":
        if (isLastCharOperator) {
          toast("invalid used format");
          return;
        }
        return;
      default:
        if (isLeftZero && isPressedZero || hasOperationClicked) {
          return;
        } else if (isLeftZero) {
          setCurrentNumber(buttonPressed);
        } else {
          setCurrentNumber(currentNumber + buttonPressed);
        }

        return;
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#ececec" }}>

      <View style={{
        flex: 0.2,
        flexDirection: "row",
        backgroundColor: "#323543",
        paddingHorizontal: 8
      }}>
        <Text style={styles.visorHistoric}>{historicNumber}</Text>
      </View>

      <View style={styles.visor}>
        <TextInput multiline numberOfLines={4} style={styles.visorResult}>
          {currentNumber
          }</TextInput>
      </View>

      <View style={{
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "#23262F"
      }}>

        <View style={{ flex: 1, flexDirection: "row" }}>

          <View style={{
            flex: 2.5,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            {
              buttons.map((number) =>
                <TouchableOpacity key={number} style={styles.button} onPress={() => onButtonPress(number)}>
                  <Text style={styles.textButton}>{number}</Text>
                </TouchableOpacity>
              )
            }
          </View>

          <View style={{ flex: 0.6, flexDirection: "column", justifyContent: "center" }}>

            <TouchableOpacity style={[styles.buttonOperation, { borderTopStartRadius: 8, borderTopEndRadius: 8 }]}
                              onPress={() => onButtonPress("/")}>
              <Text style={styles.textButton}>÷</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOperation} onPress={() => onButtonPress("×")}>
              <Text style={styles.textButton}>×</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOperation} onPress={() => onButtonPress("-")}>
              <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonOperation, { borderBottomStartRadius: 8, borderBottomEndRadius: 8 }]}
              onPress={() => onButtonPress("+")}>
              <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonOperation, {
              marginTop: 16,
              paddingVertical: 8,
              backgroundColor: "#7E68CF",
              borderRadius: 8
            }]}
                              onPress={() => onButtonPress("=")}>
              <Text style={styles.textButton}>=</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    height: "30%",
    paddingHorizontal: 16
  },
  column: {
    flexDirection: "column",
    height: "100%"
  },
  space_between_columns: {
    width: 100
  },
  box: {
    height: 50,
    width: 50
  },
  visor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 300,
    backgroundColor: "#323543"
  },
  visorHistoric: {
    fontSize: 22,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: "flex-end",
    color: "#dbdbdb"
  },
  visorResult: {
    fontWeight: "100",
    fontSize: 54,
    margin: 10,
    color: "#eeeeee",
    alignSelf: "flex-end"
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  keyboardAction: {
    flexDirection: "column",
    flexWrap: "wrap"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 80,
    minWidth: 100,
    alignSelf: "baseline"
  },
  buttonOperation: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#302E43",
    minHeight: 60
  },
  textButton: {
    color: "#eeeeee",
    fontSize: 25
  }
});

export default App;
