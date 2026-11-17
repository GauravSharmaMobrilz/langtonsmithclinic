
export function disableInspect({
  redirectUrl = null,
  detectDevTools = true,
  showWarning = true,
} = {}) {
  let warningShown = false;
  let devtoolsDetected = false;
  let detectionTimer;

  // Block context menu
  const blockContextMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // Block common inspection shortcuts
  const blockKeys = (event) => {
    const key = event.key.toLowerCase();

    const blocked =
      event.key === "F12" ||
      (event.ctrlKey &&
        event.shiftKey &&
        ["i", "j", "c", "k"].includes(key)) ||
      (event.ctrlKey && ["u", "s"].includes(key)) ||
      (event.metaKey &&
        event.altKey &&
        ["i", "j", "c"].includes(key));

    if (blocked) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  };

  // Block selection and dragging without affecting inputs
  const blockDefault = (event) => {
    const target = event.target;

    if (
      target.closest(
        "input, textarea, select, [contenteditable='true']"
      )
    ) {
      return;
    }

    event.preventDefault();
  };

  // Detect likely DevTools opening
  const detectDevToolsOpen = () => {
    if (!detectDevTools || devtoolsDetected) return;

    const widthDifference =
      window.outerWidth - window.innerWidth;

    const heightDifference =
      window.outerHeight - window.innerHeight;

    const threshold = 160;

    const detected =
      widthDifference > threshold ||
      heightDifference > threshold;

    if (detected) {
      devtoolsDetected = true;

      if (showWarning && !warningShown) {
        warningShown = true;

        alert(
          "Developer Tools detected. Please close Developer Tools to continue."
        );
      }

      if (redirectUrl) {
        window.location.replace(redirectUrl);
      }
    } else {
      devtoolsDetected = false;
      warningShown = false;
    }
  };

  document.addEventListener(
    "contextmenu",
    blockContextMenu,
    true
  );

  document.addEventListener(
    "keydown",
    blockKeys,
    true
  );

  document.addEventListener(
    "selectstart",
    blockDefault,
    true
  );

  document.addEventListener(
    "dragstart",
    blockDefault,
    true
  );

  if (detectDevTools) {
    detectionTimer = window.setInterval(
      detectDevToolsOpen,
      1000
    );
  }

  return () => {
    document.removeEventListener(
      "contextmenu",
      blockContextMenu,
      true
    );

    document.removeEventListener(
      "keydown",
      blockKeys,
      true
    );

    document.removeEventListener(
      "selectstart",
      blockDefault,
      true
    );

    document.removeEventListener(
      "dragstart",
      blockDefault,
      true
    );

    window.clearInterval(detectionTimer);
  };
}
