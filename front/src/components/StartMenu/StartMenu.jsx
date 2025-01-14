import React, { useEffect, useState } from 'react';
import "./StartMenu.css";

const StartMenu = ({links}) => {
  
  return (
    <div className="start-menu-content ">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="/images/profile.jpg" // Replace with your profile image URL
          alt="Profile"
          className="profile-picture"
        />
        <span className="profile-name">{links["my-name"]}</span>
        <span style={{color:"lightgray"}}>{links["title"]}</span>
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {links?.socials?.map((social) => (
          <button className="menu-item"onClick={() => window.open(social.url, '_blank')}>{social.name}</button>
        ))}
        <button className="menu-item"onClick={() => window.location.href = `mailto:${links['my-email']}`}>Email me</button>
        
        <input className="search-item" type="search" placeholder="Search" />
      </div>
    </div>
  );
};

export default StartMenu;
