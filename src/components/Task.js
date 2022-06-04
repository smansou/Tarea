import React, {useState} from 'react';
import './task.css';



export default function Task(props) {

        const [completed, setCompleted] = useState(false);
    return (
        <div className='task-container'>
             <div>{props.iid}</div>
             <label > {props.taskName} </label>
             <div>{props.taskDeadline}</div>
             <div>{props.dateCreated}</div>
             <div >{props.taskInfo}</div>
             
            <input type="checkbox" checked={completed} />
        </div>
    )
}
