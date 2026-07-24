const express = require("express");
const app = express();

// This will only handle GET call to /user
app.get("/user", (req, res)=> {
    res.send({
        firstName: "Chinna",
        lastName: "Rayudu"
    })
})

app.post("/user", (req, res)=> {
    // saving data to db
    res.send("Data successfully saved to the database")
})

app.delete("/user", (req, res)=> {
    res.send("Deleted Successfully!")
})

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res)=> {
    res.send("Hello from server!")
})

app.listen(7777, ()=> {
    console.log("Server is successfully listen on port 3000....")
});
