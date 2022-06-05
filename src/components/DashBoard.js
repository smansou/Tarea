import { collection, getDocs } from 'firebase/firestore'
import React, { children } from 'react'
import { db } from '../firebase/firebase'
import Projects from './Projects'
import './dashboard.css'
import ProjectOverview from './ProjectOverview'

export default function DashBoard() {



  return (

    <div className="dashboard">
      <div className="navbar">
        navbar
      
      </div>
      <div className='container'>
      <div className="sidebar">
        sidebar
      </div>
      
      <Projects />
      
      </div>
    </div>
   

  )
}

//?   show all projects corresponding to user (where userEmail is present in team[])
//?   mark projects as editable where Owner prop === Currentuser.email