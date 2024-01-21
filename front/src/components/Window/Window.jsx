import React from "react";
import ReactDOM from "react-dom";
import "./Window.css";
import { useSelector, useDispatch } from "react-redux";
import Draggable from "react-draggable";
import TopBar from "../TopBar/TopBar";
import { removeFromActiveApps, setTop } from "../../redux/actions";

const Window = ({ name }) => {
  const dispatch = useDispatch();
  const screenBounds = {
    left: 0,
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
  };

  const styling = {
    zIndex: useSelector((state) => state.top) == name ? "1" : "0",
  };

  const initialPosition = {
    x: window.innerWidth / 4,
    y: window.innerHeight / 6,
  };

  const setAsTop = () => {
    dispatch(setTop(name));
  };


  return ReactDOM.createPortal(
    <Draggable
      onMouseDown={() => setAsTop()}
      bounds={screenBounds}
      defaultPosition={initialPosition}
      handle="strong"
    >
      <div className="window-box" style={styling}>
        <strong className="cursor glass active">
          <TopBar name={name}></TopBar>
        </strong>
        <div className="content">

        </div>
      </div>
    </Draggable>,
    document.body
  );
};

export default Window;
