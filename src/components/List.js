import React, { useState, useEffect, useContext } from 'react'
import { useAuth } from './contexts/AuthContext';
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import './list.css'
import { faker } from '@faker-js/faker';


export default function List() {
  const [projects, setProjects] = useState([]);
  const { currentUser } = useAuth();
  const navigateTo = useNavigate();

  useEffect(() => {
    // setLoading(true);
    const projectsRef = collection(db, 'projects');
    let allProjects = [];
    const q = query(projectsRef, where("team", "array-contains", currentUser.email))
    getDocs(q)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          allProjects.push({ ...doc.data(), id: doc.id });
        })
        setProjects(allProjects);
        // setLoading(false);
      }).catch((error) => {
        console.log(error, "failed to fetch projects");
      })
  }, []);

  const mapProjects = () => {
    return projects.map((project,i) => {
      while(i<5){
        return (
            <div className='project-list-item'
                onClick={() => navigateTo(`/dashboard/project-overview/${project.id}`)}
                key={project.id}
            >
              <div className="project-image-box">
                <img src={faker.image.avatar()} className="project-image"/>
              </div>
              <div className="project-name">{project.name}</div>
              <div className="view-project">view</div>
                <Link to={`/dashboard/project-overview/${project.id}`} />
            </div>
        )
      }
    })
  
}



  return (
    <>
      <div className="list-title">Projects Overview</div>
      <div className="project-list-table">
    {mapProjects()}
        <div onClick={()=>navigateTo('/dashboard/projects')} className="view-all">View all</div>
      </div>
    </>
  )
}

