export const toggleStart = () => ({
    type: 'toggleStart',
  });
  export const setStart = () => ({
    type: 'setStart',
  });
  export const setTop = (top) => ({
    type: 'setTop',
    top
  });
  export const setSelected = (selectedApp) => ({
    type: 'setSelected',
    selectedApp
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
  export const toggleApp = (appName) => ({
    type: "toggleApp",
    appName,
  });
  export const removeFromActiveApps = (oldApp) => ({
    type: "removeFromActiveApps",
    oldApp,
  });