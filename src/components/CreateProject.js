import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { collection, addDoc, getDoc, doc , setDoc} from 'firebase/firestore';
import { useAuth } from './contexts/AuthContext';


export default function CreateProject() {

  const [startDate, setStartDate] = useState(new Date());
  const projectNameRef = useRef();
  const projectInfoRef = useRef();
  const navigateTo = useNavigate();
  const {currentUser, } = useAuth();
  const [loading, setLoading] = useState(false);
  const [projectState, setProjectState] = useState({
    
    projectID: '',
    name: '',
    created: new Date(),
    info: '',
    tasks: [],
    owner: currentUser.email,
    team: []
  })
  

  const handleChange = async (e) => {
    const projectsRef = collection(db, 'projects');
    setProjectState({...projectState, [e.target.name]: e.target.value })
    
    }

  const handleSubmit = async (e) => {

    

    e.preventDefault();
    //?/ Update DB ///
    setLoading(true);
  
    
await addDoc(collection(db, 'projects'), {...projectState, projectID:Math.floor(Math.random()*40000000)})
   .then(()=>{
     setLoading(false);
     
     //? navigateTo('/project/:id');
     
     
    }).catch((error)=>{
      console.log(error, 'failed to submit data');
    })
    
    
  }

  return (

    <form onSubmit={handleSubmit} className='ui form'>
      <div>
        <label>Project Name</label>
        <input name={'name'} ref={projectNameRef} onChange={handleChange}
          type="text" placeholder='project Name'
        />
      </div>
      <div>
        <label>Project description</label>
        <input name={'info'} ref={projectInfoRef} onChange={handleChange}
          type="text" placeholder='Project Description'
        />
      </div>

      <button className='ui button' type='submit'>Create New Project</button>

    </form>
  )
}
