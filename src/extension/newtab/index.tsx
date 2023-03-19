import { createRoot } from "react-dom/client";
import Newtab from "@/src/extension/newtab/Newtab";
import "@/extension/newtab/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("extension/newtab");

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(<Newtab />);
}

init();
