import React from "react";
import { Text, View } from "react-native";

interface Props {
  text: string;
}

const Key: React.FC<Props> = ({ text }) => (
  <>
    <View style={{ height: 200, justifyContent: "center", backgroundColor: "#282832" }}>
      <Text style={{ color: "white", fontSize: 28, fontWeight: "bold", textAlign: "center" }}>{text}</Text>
    </View>
  </>
);

export default Key;
