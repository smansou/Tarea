import React, { useState, useEffect } from 'react'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useNavigate, Route, Routes } from 'react-router';
import { useAuth } from './contexts/AuthContext';
import ProjectCard from './ProjectCard';
import ProjectOverview from './ProjectOverview';
import './projects.css'
import { Outlet } from 'react-router-dom';

export default function Projects() {
    const navigateTo = useNavigate();
    const { currentUser } = useAuth();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showProjectList, setShowProjectList] = useState(true);
    const [isOwner, setisOwner] = useState(false);


    const [currentProject, setCurrentProject] = useState({
        title: '',
        id: '',
        info: '',
        team: '',
        owner:''
    });


    //? get all projects where the current user's email is listed in Team Array
    useEffect(() => {
     
        const projectsRef = collection(db, 'projects');
        let allProjects = [];
        const q = query(projectsRef, where("team", "array-contains", currentUser.email))
        getDocs(q)
            .then((snapshot) => {

                snapshot.docs.forEach((doc) => {
                    allProjects.push({ ...doc.data(), id: doc.id });
                })
                setProjects(allProjects);   
                setLoading(false);
            }).catch((error) => {
                console.log(error, "failed to fetch projects");
            })
    }, []);


    const mapProjects = () => {
        return projects.map((project) => {
            // console.log(project.tasks.filter(e=>e.completed));

            return (
                <div className='ui segment project-card' onClick={() => handleProjectChoice(project.id)} value={project.id} key={project.id} >
                    <ProjectCard
                        name={project.name}
                        info={project.info}
                        projectID={project.id}
                        team={project.team} 
                        tasks={project.tasks}
                        createdAt={Date(project.created).slice(3,16)}
                        />
                        
                </div>
            )
        })
    }
    const handleProjectChoice = (projID) => {
        const current = projects.find(project => project.id === projID)
        setCurrentProject({
            title: current.name,
            id: projID,
            info: current.info,
            team: [...current.team],
            tasks: [current.tasks],
            owner: [current.owner],
        })
        showProjectList ? setShowProjectList(false) : setShowProjectList(true);
         currentUser.email == current.owner ? setisOwner(true) : setisOwner(false)
        
    }
    return (
        <div className='overviews'>
            {showProjectList ? <div className='projects-container'> {!loading && mapProjects()} </div>
                :
                <>
                <div className='project-task-container'>
                    {/* <div className='project-overview'> */}
                        {!showProjectList && <ProjectOverview
                            title={currentProject.title}
                            info={currentProject.info}
                            team={currentProject.team}
                            projectId={currentProject.id}
                            projectOwner={isOwner}
                            
                        />}
                    {/* </div> */}
                   
                </div>
                <Outlet />
                </>
                
            }
        </div>
    )
}

