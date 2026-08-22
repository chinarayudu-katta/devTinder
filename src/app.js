const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignupData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res)=> {
    try{
    // validation the data
    validateSignupData(req)
    const {firstName, lastName, emailId, password} = req.body;
    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log("Password hash: ", passwordHash);    
     const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash,
        });    
        await user.save();
        res.send("User added successfully...")
    } catch (err){
        res.status(400).send("ERROR: " + err.message)    
    }
})

app.post("/login", async (req, res)=> {
    try{
       const { emailId, password } = req.body;
       const user = await User.findOne({emailId: emailId});
       if(!user){
        throw new Error("Invalid credentials")
       }
       const isPasswordValid = await user.validatePassword(password);
       if(isPasswordValid){
        const token = await user.getJWT();     

        res.cookie("token", token, {expires: new Date(Date.now() + 1 * 3600000)});
        res.send("Login successfully!!!")
       } else {
        throw new Error("Invalid credentials")
       }
        
    }catch (err){
        res.status(400).send("Something went wrong: " + err.message)
    }
})

app.get("/profile", userAuth, async (req, res)=> {
    try{
    const user = req.user;
    res.send(user)
    } catch (err){
        res.status(400).send("ERROR: " + err.message)    
    }
})

app.post("/sendConnectionRequest", userAuth, async (req, res)=> {
    const user = req.user;

    console.log("Send connection request API called...")
    res.send(user.firstName + " " + user.lastName + " sent a connection request!")
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

