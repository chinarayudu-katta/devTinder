const express = require("express");
const app = express();

// req /user /user/xyz, /user/1
app.get("/user/:userId/:name/:password", (req, res)=> {
    console.log(req.params)
    res.send({
        firstName: "Chinna",
        lastName: "Rayudu"
    })
})


app.listen(7777, ()=> {
    console.log("Server is successfully listen on port 3000....")
});
