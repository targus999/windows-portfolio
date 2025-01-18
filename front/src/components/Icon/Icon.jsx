import React from "react";
import "./Icon.css";
import { useDispatch, useSelector } from "react-redux";
import { addToActiveApps, maximizeApp,  setSelected, setStart, setTop } from "../../redux/actions";

const Icon = ({ appName }) => {
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(setSelected(appName));
    dispatch(setStart())
  };

  const openApp = () => {
    const app = { name: appName };

    dispatch(addToActiveApps(app));
    dispatch(setTop(appName));
    dispatch(maximizeApp(appName));
  };

  return (
    <div className="icon" onDoubleClick={openApp}>
      <div
        className={`desktop-icon ${useSelector((state) => state.isSelected)===appName ? "selected" : ""}`}
        onClick={handleIconClick}
      >
        <img src={`/images/${appName.replace(/ /g, "-")}.webp`}  alt={'icon'} />
        <p>{appName }</p>
      </div>
    </div>
  );
};

export default Icon;
