const initialState = {
  top: [],
  apps: [
    { name: "My Expertise", active: false, minimize: false },
    { name: "Resume.pdf", active: false, minimize: false },
    { name: "My Hobbies", active: false, minimize: false },
  ],
  activeApps: [],
  isSelected: "",
  showStartBar: false,
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "setTop":
      if (state.top[0] != action.top)
        return {
          ...state,
          top: [action.top, ...state.top.filter((app) => app !== action.top)],
        };
    case "setSelected":
      return {
        ...state,
        isSelected: action.selectedApp,
      };
    case "setStart":
      return {
        ...state,
        showStartBar: false,
      };
    case "toggleStart":
      return {
        ...state,
        showStartBar: !state.showStartBar,
      };
    case "maximizeApp":
      return {
        ...state,
        apps: state.apps.map((app) => {
          if (app.name === action.appName) {
            return {
              ...app,
              minimize: false,
            };
          }
          return app;
        }),
      };
    case "toggleApp":
      return {
        ...state,
        apps: state.apps.map((app) => {
          if (app.name === action.appName) {
            return {
              ...app,
              minimize: !app.minimize,
            };
          }
          return app;
        }),
      };
    case "minimizeApp":
      return {
        ...state,
        apps: state.apps.map((app) => {
          if (app.name === action.appName) {
            return {
              ...app,
              minimize: true,
            };
          }
          return app;
        }),
      };
    case "addToActiveApps":
      if (!state.activeApps.some((app) => app.name === action.newApp.name))
        return {
          ...state,
          apps: state.apps.map((app) => {
            if (app.name === action.newApp.name) {
              return {
                ...app,
                active: true,
              };
            }
            return app;
          }),
          activeApps: [...state.activeApps, action.newApp],
        };
    case "removeFromActiveApps":
      return {
        ...state,
        apps: state.apps.map((app) => {
          if (app.name === action.oldApp) {
            return {
              ...app,
              active: false,
            };
          }
          return app;
        }),
        activeApps: state.activeApps.filter(
          (app) => app.name !== action.oldApp
        ),
      };
    case "removeFromTop":
      return {
        ...state,
        top: state.top.filter(
          (app) => app !== action.oldApp
        ),
      };
    default:
      return state;
  }
};

export default reducer;
