const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const Routes = require("./routes");
const dotenv = require("dotenv")
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, ()=>{
    console.log('connected to mongoDB');
})

app.use("/api/user", Routes);

app.listen(process.env.PORT || port, () =>
  console.log(`Server started on port ${port}`)
);
