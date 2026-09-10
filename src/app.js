const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    // methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use(express.json());
app.use(cookieParser());

const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const requestRouter = require('./routes/request');
const userRouter = require('./routes/userRouter');

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
.then(()=> {
    console.log("Database connected successfully...");

    app.listen(7777, ()=> {
    console.log("Server is successfully listen on port 7777....")
});
})
.catch((err)=> {
    console.error(err)
})

