
import React, {useContext} from 'react';
import './dashboard.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useNavigate} from "react-router-dom";
import { MyGlobalContext } from './contexts/GlobalContext';

export default function Navbar() {

       const { logout, currentUser } = useAuth();
    const navigateTo = useNavigate();
    const contextValue = useContext(MyGlobalContext);
    
  const handleLogOut = async () => {
     logout()
      .then(navigateTo('/'));
  }

  const toggleTheme = () => {
    contextValue[0].darkTheme ? 
    contextValue[1]({...contextValue[0], darkTheme: false}) 
    :
    contextValue[1]({...contextValue[0], darkTheme: true});
  }
  return (
    <>
<nav className={`ui top fixed ${contextValue[0].darkTheme ? 'inverted' : ''} menu`}> 
<div className="left menu">
  <a href="#" className="sidebar-menu-toggler item" data-target="#sidebar">
    <i className="sidebar icon"></i>
  </a>
  <a onClick={()=>{navigateTo('/')}} href="#" className="header item">
    <h3> Tarea </h3>
  </a>
</div>

<div className="right menu">
  <a href="#" className="item ">
    <div className="ui toggle checkbox">
    <input type="checkbox" onChange={toggleTheme} />
    <label></label>
  </div>
  </a>
      <div onClick={handleLogOut} className="item hoverable">
        <i className="sign-out icon"></i>
        Logout
      </div>
  <div className="ui dropdown item">
    <i className="user cirlce icon"></i>
    <div className="menu">
      <a href="#" className="item hoverable">
        <i className="info circle icon"></i> Profile</a
      >
      <a href="#" className="item hoverable">
        <i className="wrench icon"></i>
        Settings</a>
    </div>
  </div>
</div>
</nav>
</>
  )
}



 