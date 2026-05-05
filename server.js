const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.static("public"));

app.get("/api/users" , (req , res) => {
    const userData = JSON.parse(fs.readFileSync("users.json","utf-8"))
    res.json(userData);
})

app.listen(3000 , ()=> {
    console.log("Server is Running on http://localhost:3000")
})
