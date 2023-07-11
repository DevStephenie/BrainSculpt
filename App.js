// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './config/firebaseConfig'; // Your Firebase configuration
// Initialize Firebase
// initializeApp(firebaseConfig);

import React from "react";
import { Text } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import { useFonts } from "expo-font";
import store from "./src/reducers/store";
import { AuthNavigator } from "./src/navigations";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  const [loaded] = useFonts({
    openSans: require("./src/assets/font/openSans.ttf"),
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator style={{ fontFamily: "openSans" }} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
