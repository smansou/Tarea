import React, {useState, useRef} from 'react'
import DatePicker from 'react-date-picker'
import './createTask.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';



 function CreateTask() {
    const [startDate, setStartDate] = useState(new Date());
    const currentProject = useState()
    const taskNameRef = useRef();
    const taskInfoRef = useRef();
    const navigateTo = useNavigate();
    const [taskState, setTaskState] = useState({

    });


    const  handleSubmit = (e) => {
      e.preventDefault();
            //?/ POST TO FIREBASE ///
      navigateTo('/Dashboard');


    }
    
   const handleDateChange = (date: Date) => {
       setStartDate(date);
    }

  return (

    <form onSubmit={ handleSubmit } className='ui form'>
     <div>   
    <label>Task Name</label>
    <input ref={taskNameRef} type="text" placeholder='Task Name' />
    </div>
     <div>   
    <label>Task description</label>
    <input ref={taskInfoRef} type="text" placeholder='Task Description' />
    </div>
 
    <label>Task deadline</label>
    <div className="date-container">
    <DatePicker selected={startDate} onChange={handleDateChange} />
    </div>
    <br/>
    <button className='ui button' type='submit'>Add Task</button>
       
    </form>

  )
}

export default CreateTask;