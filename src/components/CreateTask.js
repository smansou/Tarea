import React, {useState, useRef, useEffect, useContext} from 'react';
import DatePicker from 'react-date-picker';
import './createTask.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { db } from '../firebase/firebase';
import { collection, doc, getDoc, query, where, addDoc, updateDoc, FieldValue, arrayUnion } from 'firebase/firestore';
import { MyGlobalContext } from './contexts/GlobalContext';





 function CreateTask(props) {
    const [loading, setLoading] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    const taskNameRef = useRef();
    const taskInfoRef = useRef();
    const navigateTo = useNavigate();
    const contextValue = useContext(MyGlobalContext);
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
      //!contextValue[0].projectId
      e.preventDefault();
           const docRef = doc(db, 'projects',props.projectId );  
        getDoc(docRef).then((res)=>{
        let taskArray = [...res.data().tasks]
        taskArray.push(taskState);
        updateDoc(docRef, {
          tasks: arrayUnion(...taskArray)
      
    }).then(handleClose());
  
      }).catch((error)=>{
           console.log(error, 'failed to submit data');
    })
  }
    
    const handleChange =  (e) => {
      setTaskState({...taskState, [e.target.name]: e.target.value })
      
      }

   const handleDateChange = (date) => {
     const d = new Date(date).toLocaleDateString('fr-FR');
     setTaskState({...taskState, deadline: d})
    }
    //opens and closes itself from parent  ( CB )
    const handleClose = () => {
      props.close();
  }

  return (
    <div className="task-form-container">
    <form onSubmit={ handleSubmit } className='ui form taskForm'>
     <div>   
      <i onClick={handleClose} className='x icon xicon'></i>
      <div className="task-inputs">
    <p>Task Name</p>
    <input className='add-task-field1' ref={taskNameRef} name={'name'} onChange={handleChange} type="text"/>
    
     <div>   
    <p>Task description</p>
    <input className='add-task-field2' ref={taskInfoRef} name={'info'} onChange={handleChange} type="text"  />
    </div>
    
    <p>Task deadline</p>
    
    <div className="date-container">
    <DatePicker
    dateFormat="dd/MM/yyyy"
    onChange={handleDateChange}
    />
    </div>
    </div>
    </div>
    <button className='ui button taskBtn' type='submit'>Done</button>
    </form>
    </div>
  )
}

export default CreateTask;

