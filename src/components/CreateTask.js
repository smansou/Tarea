import React, {useState, useRef} from 'react'
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
    const currentProject = useState();
    const taskNameRef = useRef();
    const taskInfoRef = useRef();
    const navigateTo = useNavigate();
    const [taskState, setTaskState] = useState({
      name:'amazing',
      info:'grace',
      deadline:'',
      completed: false
    });


    const  handleSubmit = async (e) => {
      e.preventDefault();
           const docRef = doc(db, 'projects','VEHSKWGGUxKhoiQlyIAY');
        getDoc(docRef).then((res)=>{
        let taskArray = [...res.data().tasks]
        taskArray.push(taskState);
        console.log(taskArray);
        updateDoc(docRef, {
          tasks: arrayUnion(...taskArray)
      
    })
      })
      
         
      
      // .then(()=>{
      //   setLoading(false);     
        // console.log(taskState);
      //   navigateTo('/dashboard');
      //  }).catch((error)=>{
      //    console.log(error, 'failed to submit data');
      //  })
    }
    const handleChange = async (e) => {
      setTaskState({...taskState, [e.target.name]: e.target.value })
      
      }

   const handleDateChange = (date: Date) => {
       setStartDate(date);
    }

  return (

    <form onSubmit={ handleSubmit } className='ui form'>
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