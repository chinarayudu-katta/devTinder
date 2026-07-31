const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res)=> {
    const user = new User({
        firstName: "Lakshmi",
        lastName: "Rayudu",
        emailId: "lakshmi@gmail.com",
        password: "lakshmi@123"
    })
    try{
        await user.save();
        res.send("User added successfully...")
    } catch (err){
        res.status(400).send("Error saving the user: ",+ err.message)    
    }
})

connectDB()
.then(()=> {
    console.log("Database connected successfully...")
    app.listen(7777, ()=> {
    console.log("Server is successfully listen on port 7777....")
});
})
.catch((err)=> {
    console.error(err)
})

