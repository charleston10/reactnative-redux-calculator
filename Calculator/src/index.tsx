import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

const App: React.FC = () => {
  return <>
    <StatusBar barStyle={"default"} />
    <SafeAreaView>
      <View>
        <Text>Oi</Text>
      </View>
    </SafeAreaView>
  </>;
};

export default App;
