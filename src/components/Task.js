import { setDoc } from 'firebase/firestore';
import React, {useState} from 'react';
import './task.css';



export default function Task(props) {

    const [completed, setCompleted] = useState(false);
    const handleCompletionChange = () => {
        completed ? setCompleted(false) : setCompleted(true);
        //? update DB 
        // setDoc
    }
    return (
        <div className='task-container'>
             <div>{props.iid}</div>
             <label > {props.taskName} </label>
             <div>{props.taskDeadline}</div>
             <div>{props.dateCreated}</div>
             <div >{props.taskInfo}</div>
            <input onChange={handleCompletionChange} type="checkbox" checked={completed} />
             
        </div>
    )
}
