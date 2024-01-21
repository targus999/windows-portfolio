export const setTop = (top) => ({
    type: 'setTop',
    top
  });
  export const addAppToActiveApps = (newApp) => ({
    type: "addToActiveApps",
    newApp,
  });
  export const removeFromActiveApps = (oldApp) => ({
    type: "removeFromActiveApps",
    oldApp,
  });