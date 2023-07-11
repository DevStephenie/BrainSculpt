// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './config/firebaseConfig'; // Your Firebase configuration
// Initialize Firebase
// initializeApp(firebaseConfig);
// import { useFonts } from "expo-font";

import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import store from "./src/reducers/store";
import { AuthNavigator } from "./src/navigations";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator  />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
