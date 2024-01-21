import React from 'react'
import  './Icon.css'
import {useSelector,useDispatch} from 'react-redux';
import { addAppToActiveApps, setTop } from '../../redux/actions';

const Icon = ({appName}) => {
  const dispatch=useDispatch();
  const openApp=()=>{
    dispatch(addAppToActiveApps(appName));
    dispatch(setTop(appName));
  }
  return (
    <div className='icon' onDoubleClick={openApp}>
      
        <div className='icon-image'></div>
        <div className='icon-text'>{appName}</div>
    </div>
  )
}

export default Icon