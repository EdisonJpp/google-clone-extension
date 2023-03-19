try {
  chrome.devtools.panels.create(
    "Dev Tools",
    "icon-34.png",
    "src/extension/panel/index.html"
  );
} catch (e) {
  console.error(e);
}
