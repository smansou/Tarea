import React, {useState, useEffect} from 'react'
import Task from './Task'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { collection, doc, getDocs, query, where, getDoc } from 'firebase/firestore'

export default function ProjectCard(props) {

        const [tasks, setTasks] = useState([]);
        const [loading, setLoading] = useState([]);
        const [project, setProject] = useState([]);


  //   useEffect(() => {
  //     const docRef = doc(db, 'projects');
  //     let project = [];
  //             const q = query(docRef, where("team", "array-contains", ''))

  //     getDocs(q)
  //         .then((snapshot) => {
  //             snapshot.docs.forEach((doc) => {
  //                 project.push({ ...doc.data(), id: doc.id });
  //             })
  //             setProject(project);
  //             setLoading(false);
  //         }).catch((error) => {
  //             console.log(error, "failed to fetch tasks");
  //         })
  // }, []);

  // onSnapshot()

  return (
   
    <div className="ui segment">
      <div className="project-info">
        {props.name}
        {props.info}
        {props.id}
        {props.team}
        </div>
      {/* <button className='ui button'>Add task</button> */}
    <div className="task-collection">
        {/* <Task /> //? Mapping over tasks belonging to project */}
    </div>
    </div>

       
  )
}
