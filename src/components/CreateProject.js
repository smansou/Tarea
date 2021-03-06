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
    team: [currentUser.email]
  })
  

  const handleChange = async (e) => {
    const projectsRef = collection(db, 'projects');
    setProjectState({...projectState, [e.target.name]: e.target.value, projectID: Math.floor(Math.random()*99999999) })
    
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
await addDoc(collection(db, 'projects'), {...projectState})
   .then(()=>{
     setLoading(false);     
     navigateTo('/dashboard/projects');
    }).catch((error)=>{
      console.log(error, 'failed to submit data');
    })
    
    
  }

  return (
    <div className="create-project-wrapper">
    <form onSubmit={handleSubmit} className='ui form create-form'>
      <div>
        <label>Project Name</label>
        <input name={'name'} ref={projectNameRef} onChange={handleChange}
          type="text" placeholder='project Name'
        />
      </div>
      <div className='project-description-box'>
        <label>Project description</label>
        <input name={'info'} ref={projectInfoRef} onChange={handleChange}
          type="text" placeholder='Project Description'
        />
      </div>

      <button className='ui button' type='submit'>Create New Project</button>

    </form>
    </div>
  )
}
