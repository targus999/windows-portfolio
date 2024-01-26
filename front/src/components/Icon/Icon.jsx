import React from "react";
import "./Icon.css";
import { useDispatch } from "react-redux";
import { addToActiveApps, setTop } from "../../redux/actions";

const Icon = ({ appName }) => {
  const dispatch = useDispatch();

  const openApp = () => {
    const app = { name: appName};
    dispatch(addToActiveApps(app));
    dispatch(setTop(appName));
  };
  

  return (
    <div className="icon" onDoubleClick={openApp}>
      <div className="icon-image"></div>
      <div className="icon-text">{appName}</div>
    </div>
  );
};

export default Icon;
