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
import TaskOverview from './TaskOverview';
import Spinner from './Spinner';


export default function ProjectOverview(props) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addingTeam, setAddingTeam] = useState(false);
    const [addingTask, setAddingTask] = useState(false);
    const [taskOpen, setTaskOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState({});
    const [isOwner, setisOwner] = useState('none');
    const user = useParams();
    const { currentUser } = useAuth();
    const contextValue = useContext(MyGlobalContext);
    const navigateTo = useNavigate();

    useEffect(() => {
        setLoading(true);
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
    const toggleTask = (id) => {
        let task = tasks.find((task)=>task.taskID === id);
        setCurrentTask(task)
        taskOpen ? setTaskOpen(false) : setTaskOpen(true);
    }

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
                toggleTask = {toggleTask}
            />
            
            )
        })
    }
   
    return (
        <div className='tasks-projects-wrapper'>
            { loading ? <Spinner /> : 
          
            <>
        <div className="content">            
                <div className="add-btns-wrapper" style={{display: `${isOwner}`}}>
                <div onClick={()=>{setAddingTask(true)}} className="ui violet inverted right floated button">
                    <i className="tasks icon"></i> Add Task
                </div>
            <div className="add-team-container">
            <button className='ui inverted violet button' onClick={() =>addingTeam ? setAddingTeam(false) : setAddingTeam(true)}>
                <i className="add icon"></i>Add Team Member</button>
            </div>
            {addingTeam && <AddTeam projectId={contextValue[0].projectId} />}

            </div>
            {addingTask && <CreateTask projectId={contextValue[0].projectId} close={setAddingTask} />}
            <div className='ui segment' colSpan="5">
            <div className="ui large violet header">{contextValue[0].title}</div>
            <p className='ui header'>{contextValue[0].info}</p>
            </div>

            <table className="ui compact table">
                <thead>
                 
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
        <div className="right-half">
            <Outlet />
            {taskOpen && <TaskOverview name={currentTask.name} deadline={currentTask.deadline} info={currentTask.info} completed={currentTask.completed}  /> }
            
        </div>
        
        
        </>
        }
            </div>

    )
}

