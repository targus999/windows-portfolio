import React from "react";
import "./TaskItem.css";
import { maximizeApp, setStart, setTop, toggleApp } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const TaskItem = ({ app }) => {
  const dispatch = useDispatch();
  const top = useSelector((state) => state.top);
  const maximizeWindow = () => {
    if (top == app.name) {
      dispatch(toggleApp(app.name));
    } else {
      dispatch(setTop(app.name));
    }
    dispatch(setStart())
  };

  return (
    <div className={`item ${top == app.name ? "selected window glass" : ""}`}  onClick={() => maximizeWindow()}>
      <img className="item-icon" src={`/images/${app.name}.png`}  alt={app.name}></img>
    </div>
  );
};

export default TaskItem;
