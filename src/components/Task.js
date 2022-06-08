import React, { useState, useEffect } from 'react';
import './task.css';
import { collection, doc, getDoc, updateDoc, arrayUnion, arrayRemove, query, where, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebase/firebase';
import Checkbox from './Checkbox';


export default function Task(props) {

  const [completed, setCompleted] = useState();
  useEffect(()=>{
    setCompleted(props.completed);
  },[])

  const handleCompletionChange = (e) => {
    //? update DB 
    //!  props.taskId 
    const docRef = doc(db, 'projects', props.projectId);
    getDoc(docRef).then((res) => {
      let tasksArray = [...res.data().tasks];
      let taskIndex = tasksArray.indexOf(tasksArray.find((task, index) => task.taskID == props.taskId));
      tasksArray[taskIndex].completed ?
        tasksArray[taskIndex].completed = false :
        tasksArray[taskIndex].completed = true;
        completed ? setCompleted(false) : setCompleted(true);
        updateDoc(docRef, {
          tasks: deleteField()
          
        })
        updateDoc(docRef,{
          tasks: arrayUnion(...tasksArray)
        })
      }).catch((error) => {
        console.log(error, 'failed to submit data');
      })
  }


  // const handleTaskChoice = () => {
    
  // }


  return (

    <tr className='task-row' onClick={()=>props.toggleTask(props.taskId)}>

      <td><div className='ui small header'>{props.taskName}</div></td>
      <td>{props.taskDeadline}</td>
      <td>{props.taskInfo}</td>
      {/* <td>No</td> */}
      <td className="collapsing task-container">
        {/* <div className="ui toggle checkbox"> */}
          {/* <input onChange={handleCompletionChange} type="checkbox" checked={completed} /> <label></label> */}
          <Checkbox checked={completed} onChangeCallback={handleCompletionChange}/>
        {/* </div> */}
      </td>
    </tr>

  )
}



{/* <div className='task-container'>
             <div>{props.iid}</div>
             <label > {props.taskName} </label>
             <div>{props.taskDeadline}</div>
             <div>{props.dateCreated}</div>
             <div >{props.taskInfo}</div>
            <input onChange={handleCompletionChange} type="checkbox" checked={completed} />
             
        </div> */}