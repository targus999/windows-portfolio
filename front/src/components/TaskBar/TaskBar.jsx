import React, { useState } from "react";
import "./TaskBar.css";
import startIcon from "./start-button.png";
import StartMenu from "../StartMenu/StartMenu";
import { useDispatch, useSelector} from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import { toggleStart } from "../../redux/actions";

const TaskBar = () => {
  const dispatch=useDispatch();

  return (
    <div style={{ position: "absolute" }}>
      {useSelector((state) => state.showStartBar)&& <StartMenu />}
      <div className="start-bar">
        <div className="start-left">
          <div className="start-icon-container">
            <img
              src={startIcon}
              onClick={() => dispatch(toggleStart())}
              className="start-icon"
              alt="Start Icon"
              onFocus={()=>{console.log("HI");}}
            />
          </div>
          <div className="start-apps-container">
            {useSelector((state) => state.activeApps).map(
              (app,key) => <TaskItem app={app} key={key} />
            )}
          </div>
        </div>
        <div className="start-right">
          <p>TIME</p>
        </div>
      </div>
    </div>
  );
};
export default TaskBar;
