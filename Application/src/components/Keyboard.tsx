import React from "react";
import { View } from "react-native";
import Key from "components/Key";


const Keyboard: React.FC = () => {

  const numbers = Array.from(Array(10).keys());

  return (
    <>
      <View>
        {
          numbers.map(number => {
            return <Key text={number.toString()} />;
          })
        }
      </View>
    </>
  );
};

export default Keyboard;
