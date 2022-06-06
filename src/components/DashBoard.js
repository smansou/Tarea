import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../firebase/firebase'
import Projects from './Projects'
import './dashboard.css'
import ProjectOverview from './ProjectOverview'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';



//? show stats on dashboard landing, add projects tab to sidebar

export default function DashBoard() {
const navigateTo = useNavigate();
useEffect(()=>{

  navigateTo('overview');

},[])
  return (
    
    <div className="dashboard">
     
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

