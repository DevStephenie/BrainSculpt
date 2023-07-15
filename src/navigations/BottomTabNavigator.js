import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { HomeScreen } from "../screens";
import { BalancersEntry } from "../screens/balancers";
import { MoreEntry } from "../screens/more";
import { LearnNavigator } from ".";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#2AB1FA",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: "4.5rem",
        },
      }}
    >
      <Tab.Screen
        name="TrainingEntry"
        component={LearnNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="book-outline" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="BalancerEntry"
        component={BalancersEntry}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="yin-yang" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="MoreEntry"
        component={MoreEntry}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="grid" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
