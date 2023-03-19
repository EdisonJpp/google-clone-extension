import React from "react";
import { createRoot } from "react-dom/client";
import Options from "@/src/extension/options/Options";
import "@/extension/options/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("extension/options");

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(<Options />);
}

init();
