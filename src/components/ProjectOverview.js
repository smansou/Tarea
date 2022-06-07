import React, { useState, useEffect, useContext } from 'react'
import Task from './Task';
import { db } from '../firebase/firebase'
import { collection, doc, getDoc, updateDoc, arrayUnion, query, where } from 'firebase/firestore'
import './projectOverview.css'
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import AddTeam from './AddTeam';
import { useAuth } from './contexts/AuthContext';
import { MyGlobalContext } from './contexts/GlobalContext';
import CreateTask from './CreateTask';


export default function ProjectOverview(props) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addingTeam, setAddingTeam] = useState(false);
    const [addingTask, setAddingTask] = useState(false);
    const [isOwner, setisOwner] = useState('none');
    const user = useParams();
    const { currentUser } = useAuth();
    const contextValue = useContext(MyGlobalContext);
    const navigateTo = useNavigate();

    useEffect(() => {
        currentUser.email == contextValue[0].projectOwner ? setisOwner('block') : setisOwner('none');
        const projectRef = doc(db, 'projects', `${user.id}`);
        getDoc(projectRef)
            .then((snapshot) => {
                setTasks(snapshot.data().tasks);
                setLoading(false);
            }).catch((error) => {
                console.log(error, "failed to fetch Tasks");
            })
    }, []);

    const mapTasks = () => {
        return tasks.map((task, i) => {
            return (<Task
                key={i}
                taskName={task.name}
                taskInfo={task.info}
                taskDeadline={task.deadline}
                completed={task.completed}
                taskId={task.taskID}
                projectId = {contextValue[0].projectId}
            />
            )
        })
    }
   
    return (
        <div>
        <div className="content">            
                <div className="add-btns-wrapper" style={{display: `${isOwner}`}}>
                <div onClick={()=>{setAddingTask(true)}} className="ui right floated small primary labeled icon button">
                    <i className="add icon"></i> Add Task
                </div>
            <div className="add-team-container">
            <button className='ui button' onClick={() => setAddingTeam(true)}>add team member</button>
            </div>
            {addingTeam && <AddTeam projectId={contextValue[0].projectId} />}

            </div>
            <div className='ui segment' colSpan="5">
            <div className="ui large green header">{contextValue[0].title}</div>
            <p className='ui header'>{contextValue[0].info}</p>
            {addingTask && <CreateTask projectId={contextValue[0].projectId} close={setAddingTask} />}
            </div>

            <table className="ui compact  table">
                <thead>
                    <tr>
                         {''}   
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Deadline</th>
                        <th>Description</th>
                        {/* <th>Team</th> */}
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading && mapTasks()} {/*?react fragment onClick handletaskchoise(taskID) render task (find(id)?) */}
                </tbody>
            </table>

        </div>
        
            <Outlet />
            </div>
    )
}

