const path = require("path");
const history = require("connect-history-api-fallback");
const convert = require("koa-connect");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "babel-loader" }]
  },
  resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },

  serve: {
    add: app => {
      app.use(convert(history({})));
    }
  }
};
