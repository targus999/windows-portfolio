import React from "react";
import "./TaskItem.css";
import { maximizeApp, setStart, setTop } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const TaskItem = ({ app }) => {
  const dispatch = useDispatch();
  const top = useSelector((state) => state.top);
  const maximizeWindow = () => {
    if (top == app.name) {
      dispatch(maximizeApp(app.name));
    } else {
      dispatch(setTop(app.name));
    }
    dispatch(setStart())
  };

  return (
    <div className="item" onClick={() => maximizeWindow()}>
      <img src={`/images/${app.name}.png`} style={{width:'50%'}} alt={app.name}></img>
    </div>
  );
};

export default TaskItem;
