import React, { useState,useEffect } from "react";
import "./TaskBar.css";
import moment from 'moment';
import StartMenu from "../StartMenu/StartMenu";
import { useDispatch, useSelector} from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import { toggleStart } from "../../redux/actions";


const TaskBar = () => {
  const dispatch=useDispatch();
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm'));
  const [currentDate, setCurrentDate] = useState(moment().format('MM/DD/YYYY'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('HH:mm'));
      setCurrentDate(moment().format('MM/DD/YYYY'));
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);
  return (
    <div style={{ position: "absolute" }}>
      {useSelector((state) => state.showStartBar)&& <StartMenu />}
      <div className="start-bar ">
        <div className="start-left">
          <div className="start-icon-container">
            <img
              src='/images/startIcon.png'
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
        <span>{currentTime}</span>
        <span>{currentDate}</span>
        </div>
      </div>
    </div>
  );
};
export default TaskBar;
