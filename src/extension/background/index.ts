import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("extension/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("extension/content/style.scss");

console.log("background loaded");
