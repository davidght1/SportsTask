import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      "useWorkContext must be used inside an WorkoutsContextProvider"
    );
  }
  return context;
};
