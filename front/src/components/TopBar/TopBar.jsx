import React from "react";
import "./TopBar.css";

import { removeFromActiveApps } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const TopBar = ({ name }) => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(removeFromActiveApps(name));
  };

  return (
      <div className={useSelector((state) => state.top) == name ? " title-bar active" : "title-bar"}>
        <div className="title-bar-text">{name}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" onClick={() => close()}></button>
        </div>
      </div>
    
    
  );
};

export default TopBar;
