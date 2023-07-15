import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigator } from ".";
import {
  LoginScreen,
  SignupScreen,
  PasswordReset,
  PasswordReset2,
} from "../screens";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="Login"
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="PasswordReset2" component={PasswordReset2} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
