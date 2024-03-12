import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../styles/style";
import { FontAwesome5 } from "@expo/vector-icons";
import WorkoutContext from "../WorkoutContext";
import { convertToMiles } from "../utils";
const ListOfWorkouts = () => {
  const { workouts, unit } = useContext(WorkoutContext);
  const kilometerToMile = 0.621371;

  const getDistance = (distance) => {
    if (unit === "Miles") {
      return (distance * kilometerToMile).toFixed(2);
    }
    return distance.toFixed(2);
  };

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
        <View style={styles.iconContainer}>
          <FontAwesome5 name={iconName} size={24} color="#007AFF" />
          <Text style={styles.distanceText}>{formattedDate}</Text>
        </View>
        <Text>
          Distance: {formattedDistance}
          {unit}
        </Text>

        <Text>Duration: {item.duration}min</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListOfWorkouts;
