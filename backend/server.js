require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workroutes");
const userRoutes = require("./routes/user");
const cors = require("cors");

//express app
const app = express();

//cors
app.use(
  cors({
    origin: ["http://localhost:4000", "https://sports-task.vercel.app"],
    credentials: true,
  })
);

//middleware
app.use(express.json());

app.use((req, res, next) => {
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
