import React, { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutsForm from "../components/WorkoutsForm";
const Home = () => {
  const [workouts, setWorkOuts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkOuts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutsForm />
    </div>
  );
};

export default Home;
