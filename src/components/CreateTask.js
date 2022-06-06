import React, {useState, useRef, useEffect} from 'react'
import DatePicker from 'react-date-picker'
import './createTask.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { db } from '../firebase/firebase'
import { collection, doc, getDoc, query, where, addDoc, updateDoc, FieldValue, arrayUnion } from 'firebase/firestore'



 function CreateTask(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    const taskNameRef = useRef();
    const taskInfoRef = useRef();
    const navigateTo = useNavigate();
    const [taskState, setTaskState] = useState({
      taskID: '',
      name:'',
      info:'',
      deadline:'',
      completed: false
      
    });
    useEffect(() => {
      setTaskState({...taskState, taskID: Math.floor(Math.random()*6000000)})
    
      
    }, [])
    


    const  handleSubmit = async (e) => {
      e.preventDefault();
           const docRef = doc(db, 'projects','VEHSKWGGUxKhoiQlyIAY');  //! CHANGE to DYNAMIC props.projectID
        getDoc(docRef).then((res)=>{
        let taskArray = [...res.data().tasks]
        taskArray.push(taskState);
        updateDoc(docRef, {
          tasks: arrayUnion(...taskArray)
      
    })
      }).catch((error)=>{
           console.log(error, 'failed to submit data');
    })
    navigateTo('/dashboard/projects')
  }
    
    const handleChange = async (e) => {
      setTaskState({...taskState, [e.target.name]: e.target.value })
      
      }

   const handleDateChange = (date: Date) => {
       setStartDate(date);
    }

  return (

    <form onSubmit={ handleSubmit } className='ui form'>
      <i onClick={()=>navigateTo('/dashboard/projects')} className='x icon'></i>
     <div>   
    <label>Task Name</label>
    <input ref={taskNameRef} name={'name'} onChange={handleChange} type="text"/>
    </div>
     <div>   
    <label>Task description</label>
    <input ref={taskInfoRef} name={'info'} onChange={handleChange} type="text"  />
    </div>
 
    <label>Task deadline</label>
    <div className="date-container">
    <DatePicker selected={startDate}  onChange={handleDateChange} />
    </div>
    <br/>
    <button className='ui button' type='submit'>Add Task</button>
       
    </form>

  )
}

export default CreateTask;