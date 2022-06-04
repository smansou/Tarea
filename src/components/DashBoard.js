import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase/firebase'

export default function DashBoard() {

 

  return (
    <div>DashBoard

      <div className="projects-dash">
        all relevant projects
      </div>
      <div className="task-dash">
        all pro
      </div>
    </div>
  )
}

//?   show all projects corresponding to user (where userEmail is present in team[])
//?   mark projects as editable where Owner prop === Currentuser.email