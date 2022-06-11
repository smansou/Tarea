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
    //!  props.taskId 
    const docRef = doc(db, 'projects', props.projectId);
    getDoc(docRef).then((res) => {
      let tasksArray = [...res.data().tasks];
      let taskIndex = tasksArray.indexOf(tasksArray.find((task, index) => task.taskID == props.taskId));
        let comlpeted = tasksArray[taskIndex].completed; 
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
  return (
    <tr className='task-row' onClick={()=>props.toggleTask(props.taskId)}>

      <td><div className='ui small header'>{props.taskName}</div></td>
      <td>{props.taskDeadline}</td>
      <td>{props.taskInfo}</td>
      <td className="collapsing task-container">
          <Checkbox checked={completed} onChangeCallback={handleCompletionChange}/>
      </td>
    </tr>

  )
}



