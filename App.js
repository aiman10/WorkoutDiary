import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles/style";
import WorkoutContext from "./WorkoutContext";
import AddWorkoutScreen from "./components/addworkout";
import ListOfWorkoutScreen from "./components/listofworkouts";
import SettingsScreen from "./components/settings";

const Tab = createBottomTabNavigator();

export default function App() {
  const [unit, setUnit] = useState("Km");

  const [workouts, setWorkouts] = useState([
    {
      id: "1",
      type: "Running",
      distance: 5,
      duration: 30,
      date: new Date("2021-09-01").toISOString(),
    },
    {
      id: "2",
      type: "Skiing",
      distance: 10,
      duration: 60,
      date: new Date("2021-09-02").toISOString(),
    },
  ]);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts, unit, setUnit }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Add Workout") {
                iconName = focused ? "add" : "add-outline";
              } else if (route.name === "Workouts") {
                iconName = focused ? "list" : "list-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "black",
          })}>
          <Tab.Screen name="Add Workout" component={AddWorkoutScreen} />
          <Tab.Screen name="Workouts" component={ListOfWorkoutScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutContext.Provider>
  );
}
