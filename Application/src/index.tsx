import React from "react";
import { Text, View } from "react-native";

import Keyboard from "components/Keyboard";
import Key from "components/Key";

const Application: React.FC = () => (
  <>
    <View style={{
      flex: 1,
      flexDirection: "row"
    }}>
      <View>
        <Key text={"1"} />
        <Key text={"2"} />
        <Key text={"3"} />
        <Key text={"4"} />
        <Key text={"5"} />
        <Key text={"6"} />
        <Key text={"7"} />
        <Key text={"8"} />
        <Key text={"9"} />
        <Key text={"0"} />
      </View>
    </View>
  </>
);

export default Application;
