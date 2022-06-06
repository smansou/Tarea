import React, { useState, useEffect } from 'react'
import Task from './Task';
import { db } from '../firebase/firebase'
import { collection, doc, getDoc, updateDoc, arrayUnion, query, where } from 'firebase/firestore'
import './projectOverview.css'
import { Outlet, useNavigate } from 'react-router-dom';
import AddTeam from './AddTeam';


export default function ProjectOverview(props) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [adding, setAdding] = useState(false);
    const [isOwner, setisOwner] = useState('none');


    const navigateTo = useNavigate();

    useEffect(() => {
        props.projectOwner ? setisOwner('block') : setisOwner('none');
        const projectRef = doc(db, 'projects', `${props.projectId}`);
        getDoc(projectRef)
            .then((snapshot) => {
                setTasks(snapshot.data().tasks);
                setLoading(false);
            }).catch((error) => {
                console.log(error, "failed to fetch Tasks");
            })
    }, []);

    const mapTasks = () => {
        console.log(tasks);
        return tasks.map((task, i) => {
            // console.log(task.taskID);
            return (<Task
                key={i}
                taskName={task.name}
                taskInfo={task.info}
                taskDeadline={task.deadline}
                completed={task.completed}
                taskId={task.taskID}
                projectId = {props.projectId}
            />
            )
        })
    }
    const handleAddTask = () => {
        navigateTo('create-task')
    }
    return (
        <div className="content">            
                <div className="add-btns-wrapper" style={{display: `${isOwner}`}}>
                <div onClick={handleAddTask} className="ui right floated small primary labeled icon button">
                    <i className="add icon"></i> Add Task
                </div>
            <div className="add-team-container">
            <button className='ui button' onClick={() => setAdding(true)}>add team member</button>
            </div>
            {adding && <AddTeam projectId={props.projectId} />}

            </div>
            <div className='ui segment' colSpan="5">
            <div className="ui large green header">{props.title}</div>
            <p className='ui header'>{props.info}</p>

            </div>

            <table className="ui compact celled definition table">
                <thead>
                    <tr>

                    </tr>
                    <tr>
                        <th></th>
                        <th>Deadline</th>
                        <th>Description</th>
                        <th>Premium Plan</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading && mapTasks()} {/*?react fragment onClick handletaskchoise(taskID) render task (find(id)?) */}
                </tbody>

            </table>

            
        </div>
    )
}

