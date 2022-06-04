import React, {useState, useEffect} from 'react'
import Task from './Task'

export default function Project() {

        const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    //? fetch tasks belonging to project
  },[])

  return (
    <div className="project-container">
      <div className="project-info">project info here</div>
      <button className='ui button'>Add task</button>
    <div className="task-collection">
        <Task /> //? Mapping over tasks belonging to project
    </div>
    </div>
  )
}
