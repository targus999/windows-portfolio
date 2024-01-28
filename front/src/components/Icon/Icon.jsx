import React from "react";
import "./Icon.css";
import icon from './folder.png'
import { useDispatch, useSelector } from "react-redux";
import { addToActiveApps, setSelected, setTop } from "../../redux/actions";
import { useState } from "react";

const Icon = ({ appName }) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  const handleIconClick = () => {
    dispatch(setSelected(appName));
  };

  const openApp = () => {
    const app = { name: appName };
    dispatch(addToActiveApps(app));
    dispatch(setTop(appName));
  };

  return (
    <div className="icon" onDoubleClick={openApp}>
      <div
        className={`desktop-icon ${useSelector((state) => state.isSelected)==appName ? "selected" : ""}`}
        onClick={handleIconClick}
      >
        <img src={icon}  alt={appName.png} />
        <p>{appName }</p>
      </div>
    </div>
  );
};

export default Icon;
