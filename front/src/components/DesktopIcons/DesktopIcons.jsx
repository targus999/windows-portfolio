import React from "react";
import "./DesktopIcons.css";
import Icon from "../Icon/Icon";
import {useSelector} from 'react-redux';

const DesktopIcons = () => {
  return (
    <div className="desktop-icons">
       {useSelector((state) => state.apps)?.map((i,key)=>
        <Icon key={key} appName={i.name}></Icon>
        )}
    </div>
  );
};

export default DesktopIcons;
