const path = require("path");

module.exports = {
  entry: "./js/",
  output: {
    filename: "chunk.js",
    path: path.join(__dirname, "build")
  }
};
