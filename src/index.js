import "babel-polyfill";
import "./styles/global.css";
import React from "react";
import ReactDom from "react-dom";
import Home from "./pages/home";
import Museum from "./pages/museum-home";
import Library from "./pages/library-home";
import Archive from "./pages/archive-home";

if (document.getElementById("home")) {
  ReactDom.render(<Home />, document.getElementById("home"));
}

if (document.getElementById("museum")) {
  ReactDom.render(<Museum />, document.getElementById("museum"));
}

if (document.getElementById("library")) {
  ReactDom.render(<Library />, document.getElementById("library"));
}

if (document.getElementById("archive")) {
  ReactDom.render(<Archive />, document.getElementById("archive"));
}
