const initialState = {
  top: null,
  apps: [
    { name: "My Expertise", active: false, minimize: false },
    { name: "Resume.png", active: false, minimize: false },
    { name: "My Hobbies", active: false, minimize: false },
  ],
}; 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setTop":
      return {
        ...state,
        top: action.top,
      };
      case "addToActiveApps":
        return {
          ...state,
          apps: state.apps.map((app) => {
            if (app.name === action.newApp) {
              return {
                ...app,
                active: true,
              };
            }
            return app;
          }),
        };
    case "removeFromActiveApps":
      return {
        ...state,
        apps: state.apps.map((app)=>{
          if(app.name==action.oldApp){
            return {
              ...app,
              active: false,
            };
        }
        return app;
      }
        ),
      };
    default:
      return state;
  }
};

export default reducer;
