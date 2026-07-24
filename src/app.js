const express = require("express");
const app = express();

app.use("/hello", (req, res)=> {
    res.send("Hello!")
})

app.use("/test", (req, res)=> {
    res.send("Hello from server!")
})

app.listen(7777, ()=> {
    console.log("Server is successfully listen on port 3000....")
});
