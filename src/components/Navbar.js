
import React from 'react';
import './dashboard.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useNavigate} from "react-router-dom";


export default function Navbar() {

       const { logout, currentUser } = useAuth();
    const navigateTo = useNavigate();

  const handleLogOut = async () => {
     logout()
      .then(navigateTo('/'));
  }
  return (
    <>
<nav className="ui top fixed inverted menu">
<div className="left menu">
  <a href="#" className="sidebar-menu-toggler item" data-target="#sidebar">
    <i className="sidebar icon"></i>
  </a>
  <a href="#" className="header item">
    Tarea
  </a>
</div>

<div className="right menu">
  <a href="#" className="item">
    <i className="bell icon"></i>
  </a>
      <div onClick={handleLogOut} className="item">
        <i className="sign-out icon"></i>
        Logout
      </div>
  <div className="ui dropdown item">
    <i className="user cirlce icon"></i>
    <div className="menu">
      <a href="#" className="item">
        <i className="info circle icon"></i> Profile</a
      >
      <a href="#" className="item">
        <i className="wrench icon"></i>
        Settings</a>
    </div>
  </div>
</div>
</nav>
</>
  )
}

