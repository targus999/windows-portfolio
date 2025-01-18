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

  const [links,setLinks] = useState();
  useEffect(() => {
    fetch("/documents/links.json") // Path to the file inside the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        setLinks(data); // Set the parsed JSON data into state
      })
      .catch((error) => console.error("Error loading file:", error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('HH:mm'));
      setCurrentDate(moment().format('MM/DD/YYYY'));
    }, 1000);
    

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);
  return (
    <div style={{ position: "absolute" }}>
      {useSelector((state) => state.showStartBar)&& <StartMenu links={links}/>}
      <div className="start-bar ">
        <div className="start-left">
          <div className="start-icon-container">
            <img
              src='/images/startIcon.webp'
              onClick={() => dispatch(toggleStart())}
              className="start-icon"
              alt="Start Icon"
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
