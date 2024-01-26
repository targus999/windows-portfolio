import React, { useState } from "react";
import "./TaskBar.css";
import startIcon from "./start-button.png";
import StartMenu from "../StartMenu/StartMenu";
import { useSelector} from "react-redux";
import TaskItem from "../TaskItem/TaskItem";

const TaskBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "absolute" }}>
      {show && <StartMenu />}
      <div className="start-bar">
        <div className="start-left">
          <div className="start-icon-container">
            <img
              src={startIcon}
              onClick={() => setShow(!show)}
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
