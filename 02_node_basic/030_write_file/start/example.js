console.log("hello, node.js");

const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "../dist/text.txt");
console.log(distPath);

// fs.writeFileSync("./test.txt", "Hello, node.js");
// fs.writeFileSync(__dirname + "/test.txt", "Hello, node.js");
fs.writeFileSync(distPath, "Hello, node.js");
