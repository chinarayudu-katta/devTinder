const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth")

app.use("/admin", adminAuth);
// app.use("/user", userAuth);

app.get("/user", userAuth, (req, res)=> {
    res.send("User data sent")
})

app.post("/user/login", (req, res)=> {
    res.send("User logged in successfully!")
})
app.get("/admin/getAllData", (req, res)=> {
    res.send("All Data sent")
})

app.get("/admin/deleteUser", (req, res)=> {
    res.send("Deleted All user")
})
app.listen(7777, ()=> {
    console.log("Server is successfully listen on port 3000....")
});
