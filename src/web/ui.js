import React from "react";
import ReactDOM from "react-dom";
import { Plugin } from "./ui.tsx";

// Disable the context menu to have a more native feel
if (process.env.NODE_ENV === "production") {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
}

window.prepareFirstLoad = (resObject) => {
  const jsonUiObject = JSON.parse(resObject);

  ReactDOM.render(
    <Plugin pluginMessage={jsonUiObject} />,
    document.getElementById("react-page")
  );
};
