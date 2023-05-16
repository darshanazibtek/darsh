const express = require("express");
const fs = require("fs");
const { readFile } = require("fs/promises");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(400).json({ message: "Hi there node server is running" });
});

app.post("/", (req, res) => {
    res.send("hi");
});

const file = fs.readFileSync("./new.json");

app.get("/req", (req, res) => {
    res.send({
        data: JSON.parse(file),
        status: "success",
    });
});

app.listen(port, () => {
    console.log(`Server connected  to.. ${port}`);
});
