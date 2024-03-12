import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../styles/style";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import WorkoutContext from "../WorkoutContext";
import { convertToKilometers, convertToMiles } from "../utils";
import { Keyboard } from "react-native";

const AddWorkout = () => {
  const [type, setType] = useState("Running");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { workouts, setWorkouts, unit } = useContext(WorkoutContext);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    let numDistance = parseFloat(distance);
    const numDuration = parseFloat(duration);

    if (unit === "Miles") {
      numDistance = convertToKilometers(numDistance);
    }

    if (numDistance <= 0 || numDuration <= 0) {
      Alert.alert("Error", "Distance and duration must be positive numbers.");
      return;
    }

    const newWorkout = {
      id: Math.random().toString(),
      type,
      distance: numDistance,
      duration: numDuration,
      date: date.toISOString(),
    };

    setWorkouts((currentWorkouts) => [...currentWorkouts, newWorkout]);
    setType("Running");
    setDistance("");
    setDuration("");
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={type}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
        style={styles.picker}
        mode="dropdown">
        <Picker.Item label="Run" value="Running" />
        <Picker.Item label="Ski" value="Skiing" />
        <Picker.Item label="Swim" value="Swimming" />
      </Picker>

      <TextInput
        value={distance}
        onChangeText={setDistance}
        placeholder="Distance (km)"
        keyboardType="numeric"
        style={styles.textInput}
      />

      <TextInput
        value={duration}
        onChangeText={setDuration}
        placeholder="Duration (min)"
        keyboardType="numeric"
        style={styles.textInput}
      />

      <TouchableOpacity onPress={showDatepicker} style={styles.button}>
        {/* <Ionicons
          name="calendar"
          size={20}
          color="#fff"
          style={{ marginRight: 300 }}
        /> */}

        <Text style={styles.buttonText}>{formatDate(date)} </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShowDatePicker(Platform.OS === "ios");
            setDate(currentDate);
            if (Platform.OS === "android") {
              setShowDatePicker(false);
            }
          }}
        />
      )}
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonOutline}>
        <Text style={styles.buttonTextOutline}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWorkout;
