const fs = require("fs");

const c = fs.readFileSync("./read.txt", "utf8");

console.log(c);

const d = "hi darshan";

const f = fs.writeFileSync("./head.txt", c, "utf-8");

console.log(f);
