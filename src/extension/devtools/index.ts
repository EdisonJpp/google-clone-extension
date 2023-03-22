try {
  chrome.devtools.panels.create(
    "Dev Tools",
    "icon-34.png",
    "src/extension/panel/index.html"
  );
} catch (e) {
  // eslint-disable-next-line
  console.error(e);
}
