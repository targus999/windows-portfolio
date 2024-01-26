import React from 'react';
import "./TaskItem.css";
import { maximizeApp, setTop } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const TaskItem = ({app}) => {
  const dispatch=useDispatch();
  const top = useSelector((state) => state.top);
  const maximizeWindow=()=>{
    console.log(top,'hh',app.name);
    if(top==app.name){
      dispatch(maximizeApp(app.name));
    }
    else{
      dispatch(setTop(app.name));
    }
    
  }

  return (
    <div className='item' onClick={() => maximizeWindow()}>{app.name}</div>
  )
}

export default TaskItem