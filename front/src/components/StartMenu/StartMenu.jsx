import React from 'react';
import "./StartMenu.css";

const StartMenu = () => {
  return (
    <div className="start-menu-content glass">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="/images/profile.jpg" // Replace with your profile image URL
          alt="Profile"
          className="profile-picture"
        />
        <span className="profile-name">Akshay Gopal</span>
        <span style={{color:"lightgray"}}>FullStack Developer</span>
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        <button className="menu-item"onClick={() => window.open('https://github.com/targus999', '_blank')}>Github</button>
        <button className="menu-item"onClick={() => window.open('https://www.linkedin.com/in/akshay-gopal-b501b1180/', '_blank')}>LinkedIn</button>
        <button className="menu-item"onClick={() => window.location.href = 'mailto:meetakshay.gopal@gmail.com?'}>Email me</button>
        <button className="menu-item"onClick={() => window.open('https://www.instagram.com/akshay.5787/', '_blank')}> Instagram (personal)</button>
        <button className="menu-item"onClick={() => window.open('https://www.youtube.com/@akshaygopal8627', '_blank')}> Youtube</button>
        
        <input className="search-item" type="search" placeholder="Search" />
      </div>
    </div>
  );
};

export default StartMenu;
