import React from "react";
import "./TaskItem.css";
import { maximizeApp, removeFromTop, setStart, setTop, toggleApp } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const TaskItem = ({ app }) => {
  const dispatch = useDispatch();
  const top = useSelector((state) => state.top)[0];
  const maximizeWindow = () => {
    if (top === app.name) {
      dispatch(removeFromTop(app.name));
      dispatch(toggleApp(app.name));
    } else {
      dispatch(maximizeApp(app.name));
      dispatch(setTop(app.name));
      
    }
    dispatch(setStart())
  };

  return (
    <div className={`item ${top === app.name ? "selected window glass" : ""}`}  onClick={() => maximizeWindow()}>
      <img className="item-icon" src={`/images/${app.name.replace(/ /g, "-")}.webp`}  alt={app.name}></img>
    </div>
  );
};

export default TaskItem;
