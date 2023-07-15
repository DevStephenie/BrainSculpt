import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TrainingScreen,
  Tribe,
  TenTwentyMeditations,
  FiveTenMeditations,
  TrainingMeditations,
  Meditations,
  TwoFiveMeditations,
} from "../screens/learn";

const Stack = createNativeStackNavigator();

const LearnNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="TrainingScreen"
    >
      <Stack.Screen name="Tribe" component={Tribe} />
      <Stack.Screen name="Meditations" component={Meditations} />
      <Stack.Screen
        name="TrainingMeditations"
        component={TrainingMeditations}
      />
      <Stack.Screen
        name="TenTwentyMeditations"
        component={TenTwentyMeditations}
      />
      <Stack.Screen name="FiveTenMeditations" component={FiveTenMeditations} />
      <Stack.Screen name="TwoFiveMeditations" component={TwoFiveMeditations} />
      <Stack.Screen name="TrainingScreen" component={TrainingScreen} />
    </Stack.Navigator>
  );
};

export default LearnNavigator;
