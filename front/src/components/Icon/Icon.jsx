import React from "react";
import "./Icon.css";
import { useDispatch, useSelector } from "react-redux";
import { addToActiveApps, setSelected, setStart, setTop } from "../../redux/actions";
import { useState } from "react";

const Icon = ({ appName }) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  const handleIconClick = () => {
    dispatch(setSelected(appName));
    dispatch(setStart())
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
        <img src={`/images/${appName}.png`}  alt={appName.png} />
        <p>{appName }</p>
      </div>
    </div>
  );
};

export default Icon;
