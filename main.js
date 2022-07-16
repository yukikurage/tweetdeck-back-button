history.pushState(null, null, null);
window.addEventListener("popstate", () => {
  console.log("popstate fired");
  history.pushState(null, null, null);
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Backspace",
      keyCode: 8,
      which: 8,
      code: "Backspace",
      location: 0,
      altKey: false,
      ctrlKey: false,
      metaKey: false,
      shiftKey: false,
      repeat: false,
    })
  );
  document.dispatchEvent(
    new KeyboardEvent("keypress", {
      key: "Backspace",
      keyCode: 8,
      which: 8,
      code: "Backspace",
      location: 0,
      altKey: false,
      ctrlKey: false,
      metaKey: false,
      shiftKey: false,
      repeat: false,
    })
  );
  document.dispatchEvent(
    new KeyboardEvent("keyup", {
      key: "Backspace",
      keyCode: 8,
      which: 8,
      code: "Backspace",
      location: 0,
      altKey: false,
      ctrlKey: false,
      metaKey: false,
      shiftKey: false,
      repeat: false,
    })
  );
});
