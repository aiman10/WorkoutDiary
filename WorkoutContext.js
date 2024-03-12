import React from "react";

const WorkoutContext = React.createContext({
  workouts: [],
  setWorkouts: () => {},
});

export default WorkoutContext;
