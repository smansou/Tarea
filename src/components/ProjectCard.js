import React, { useState, useEffect } from 'react'
import Task from './Task'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { collection, doc, getDocs, query, where, getDoc } from 'firebase/firestore'

export default function ProjectCard(props) {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState([]);
    const [project, setProject] = useState([]);
// onSnapshot()
    return (

        <div className="projectCard">
            <div className="name-created">
                   <p className="project-name">{props.name}</p>
            <div className="created">Created: {props.createdAt}</div> 
            </div>
                    <p className="project-info">
                        {props.info}
                    </p>
                <div className="">
                        {props.team}  {/* add team avatatrs*/}
                </div>
      

            <progress className='progress-bar' value={props.tasks.filter(e=>e.completed).length} max={props.tasks.length}></progress>
            
        </div>

    )
}







// <div className="ui card projectCard">
// <div className="header ui">{props.name}</div>
// <span className="time">Created: {props.createdAt} </span>
//         <p className="ui justified container">
//             {props.info}
//         </p>
// <div className="extra content">
//     <div className="right floated author">
//             {props.team}  {/* add team avatatrs*/}
//     </div>
// </div>
// <div className="progress-bar">
// <progress className='progress-bar' value={props.tasks.filter(e=>e.completed).length} max={props.tasks.length}></progress>
// </div>
// </div>


