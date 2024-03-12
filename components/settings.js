import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/style";
import WorkoutContext from "../WorkoutContext";
import { Ionicons } from "@expo/vector-icons";
import { convertToKilometers, convertToMiles } from "../utils";

const Settings = () => {
  const { workouts, setWorkouts, unit, setUnit } = useContext(WorkoutContext);
  const [selectedUnit, setSelectedUnit] = useState(unit || "Kilometers");

  useEffect(() => {
    setSelectedUnit(unit);
  }, [unit]);

  const handleSelectUnit = (unit) => {
    setSelectedUnit(unit);
    setUnit(unit);

    const convertedWorkouts = workouts.map((workout) => {
      const convertedDistance =
        unit === "Miles"
          ? convertToMiles(workout.distance)
          : convertToKilometers(workout.distance);
      return { ...workout, distance: convertedDistance };
    });

    setWorkouts(convertedWorkouts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Units</Text>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleSelectUnit("Kilometers")}>
        <Ionicons
          name={
            selectedUnit === "Kilometers"
              ? "radio-button-on"
              : "radio-button-off"
          }
          size={24}
          color="#007AFF"
        />
        <Text style={styles.radioText}>Kilometers</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleSelectUnit("Miles")}>
        <Ionicons
          name={
            selectedUnit === "Miles" ? "radio-button-on" : "radio-button-off"
          }
          size={24}
          color="#007AFF"
        />
        <Text style={styles.radioText}>Miles</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
