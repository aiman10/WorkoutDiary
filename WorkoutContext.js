import React from "react";

const WorkoutContext = React.createContext({
  workouts: [],
  unit: "Km",
  setWorkouts: () => {},
  setUnit: () => {},
});

export default WorkoutContext;
