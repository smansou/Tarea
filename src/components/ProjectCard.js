import React, { useState, useEffect } from 'react'
import Task from './Task'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { collection, doc, getDocs, query, where, getDoc } from 'firebase/firestore'

export default function ProjectCard(props) {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState([]);
    const [project, setProject] = useState([]);
    const progress = props.tasks.length/props.tasks.filter(e=>e.completed).length;
    //   useEffect(() => {
    //     const docRef = doc(db, 'projects');
    //     let project = [];
    //             const q = query(docRef, where("team", "array-contains", ''))

    //     getDocs(q)
    //         .then((snapshot) => {
    //             snapshot.docs.forEach((doc) => {
    //                 project.push({ ...doc.data(), id: doc.id });
    //             })
    //             setProject(project);
    //             setLoading(false);
    //         }).catch((error) => {
    //             console.log(error, "failed to fetch tasks");
    //         })
    // }, []);

    // onSnapshot()

    return (

        <div className="ui card">
            <div className="div-color" style={{borderRadius:'50% ',width:'100%', height: '40px', backgroundColor:'#CF9FFF', marginTop: '10px', transform:'translatey(-30px)'}}></div>
            <div className="header ui">{props.name}</div>
            <span className="time">Created: {props.createdAt} </span>
            <div className="content">
                <div className="meta">
                </div>
                <div className="description">
                    <p className="ui justified container">
                        {props.info}
                    </p>
                </div>
            </div>
            <div className="extra content">
                <div className="right floated author">
                    <div className="description">
                        {props.team}  {/* add team avatatrs*/}
                    </div>
                </div>
            </div>
            
            <progress className='progress-bar' value={props.tasks.filter(e=>e.completed).length} max={props.tasks.length}></progress>
        </div>

    )
}










