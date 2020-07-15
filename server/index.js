const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const nameRouter = require('./router/nameRouter');

app.use(express.json());

app.use(cors());
app.use('/api', nameRouter);

app.listen(5000, () => {
  console.log("Server is running");
});

mongoose.connect(
  "mongodb://localhost:27017/merntutorial",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB is connected");
  }
);
