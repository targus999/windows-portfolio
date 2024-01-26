export const setTop = (top) => ({
    type: 'setTop',
    top
  });
  export const addToActiveApps = (newApp) => ({
    type: "addToActiveApps",
    newApp,
  });
  export const minimizeApp = (appName) => ({
    type: "minimizeApp",
    appName,
  });
  export const maximizeApp = (appName) => ({
    type: "maximizeApp",
    appName,
  });
  export const removeFromActiveApps = (oldApp) => ({
    type: "removeFromActiveApps",
    oldApp,
  });