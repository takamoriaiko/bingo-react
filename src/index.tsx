import React from "react";
import { render } from "react-dom";

import App from "./app";

console.log("こんにちは");
document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.querySelector("main"));
});
