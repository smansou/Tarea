import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useContext } from 'react'
import { db } from '../firebase/firebase'
import Projects from './Projects'
import './dashboard.css'
import ProjectOverview from './ProjectOverview'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import Overview from './Overview'
import { useAuth } from './contexts/AuthContext';
import { MyGlobalContext } from './contexts/GlobalContext';




export default function DashBoard() {
  const {currentUser} = useAuth();
const navigateTo = useNavigate();
  const contextValue = useContext(MyGlobalContext);
let darkTheme = contextValue[0].darkTheme;
  let color =  darkTheme ? '#333' : '' 



useEffect(()=>{
  if (!currentUser)
  navigateTo('/login');

},[])
  return (
    
    <div className="dashboard" style={{backgroundColor: `${color}`}}>
     
      <Navbar />
      <div className='main-content'>
        <Outlet />
      </div>

      <div className='container'>
        <Sidebar />

      </div>
    </div>
    


  )
}

