const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan")
const authRoute = require("./routes/auth");
const chiamateRoute=require("./routes/chiama");
const cors = require("cors")

dotenv.config();

mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true},()=>{
    console.log("Connected to mongoDB")
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use(cors())

app.use("/api/auth", authRoute);
app.use("/api/chiama", chiamateRoute);


app.listen(8800, ()=>{
    console.log("Backend server is running")
})