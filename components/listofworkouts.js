import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../styles/style";
import { FontAwesome5 } from "@expo/vector-icons";
import WorkoutContext from "../WorkoutContext";
import { convertToMiles } from "../utils";
const ListOfWorkouts = () => {
  const { workouts, unit } = useContext(WorkoutContext);
  const kilometerToMile = 0.621371;

  const getIconName = (type) => {
    switch (type) {
      case "Running":
        return "running";
      case "Skiing":
        return "skiing";
      case "Swimming":
        return "swimmer";
      default:
        return "body";
    }
  };

  const WorkoutSummary = ({ workouts, unit }) => {
    const totals = workouts.reduce((acc, workout) => {
      const workoutDistance =
        unit === "Miles" ? convertToMiles(workout.distance) : workout.distance;
      acc[workout.type] = acc[workout.type] || 0;
      acc[workout.type] += workoutDistance;
      return acc;
    }, {});
    const workoutIcons = {
      Running: "running",
      Skiing: "skiing",
      Swimming: "swimmer",
    };

    return (
      <View style={styles.summaryContainer}>
        {Object.keys(workoutIcons).map((type) => (
          <View key={type} style={styles.summaryItem}>
            <FontAwesome5 name={workoutIcons[type]} size={24} color="#007AFF" />
            <Text style={styles.summaryText}>
              {totals[type] ? totals[type].toFixed(2) : 0} {unit}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const workoutDate = new Date(item.date);
    const distance =
      unit === " Miles" ? convertToMiles(item.distance) : item.distance;
    const formattedDistance = distance.toFixed(2);
    const formattedDate = `${workoutDate
      .getDate()
      .toString()
      .padStart(2, "0")}.${(workoutDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${workoutDate.getFullYear()}`;

    const iconName = getIconName(item.type);

    return (
      <View style={styles.listItem}>
        <View style={styles.listItemHeader}>
          <FontAwesome5 name={iconName} size={24} color="#007AFF" />
          <Text style={styles.typeText}>{item.type}</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
        <Text>
          Distance: {formattedDistance} {unit}
        </Text>
        <Text>Duration: {item.duration}min</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <WorkoutSummary workouts={workouts} unit={unit} />

      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListOfWorkouts;
