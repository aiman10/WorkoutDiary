import React from "react";

const WorkoutContext = React.createContext({
  workouts: [],
  unit: "Kilometers",
  setWorkouts: () => {},
  setUnit: () => {},
});

export default WorkoutContext;
