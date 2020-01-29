import "babel-polyfill";
import "./styles/global.css";
import React from "react";
import ReactDom from "react-dom";

import MuseumSummary from "./pages/museum-summary";
import MuseumDetail from "./pages/museum-detail";
if (document.getElementById("sum_collections")) {
  ReactDom.render(
    <MuseumSummary />,
    document.getElementById("sum_collections")
  );
}

if (document.getElementById("detail_collections")) {
  ReactDom.render(
    <MuseumDetail />,
    document.getElementById("detail_collections")
  );
}
