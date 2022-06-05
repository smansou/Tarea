import React, { useState, useEffect } from 'react'
import Task from './Task';
import { db } from '../firebase/firebase'
import { collection, doc, getDoc, query, where } from 'firebase/firestore'
import './projectOverview.css'


export default function ProjectOverview(props) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const projectRef = doc(db, 'projects', `${props.projectId}`);
        getDoc(projectRef)
            .then((snapshot) => {
                console.log(snapshot);
                setTasks(snapshot.data().tasks);
                setLoading(false);
            }).catch((error) => {
                console.log(error, "failed to fetch Tasks");
            })
    }, []);

    const mapTasks = () => {
        console.log(tasks);
        return tasks.map((task, i) => {
            return (<Task
                key={i}
                taskName={task.name}
                taskInfo={task.info}
                taskDeadline={task.deadline}
            />
            )
        })
    }

    return (
            <div className="content">
                <div className="header">{props.title}</div>
                    <p>{props.info}</p>
                {!loading && mapTasks()}
                    {props.team}
        </div>
    )
}
