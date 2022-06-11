import React, { useState, useEffect, useContext } from 'react'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useNavigate, Route, Routes } from 'react-router';
import { useAuth } from './contexts/AuthContext';
import ProjectCard from './ProjectCard';
import ProjectOverview from './ProjectOverview';
import './projects.css'
import { Link, Outlet } from 'react-router-dom';
import { MyGlobalContext } from './contexts/GlobalContext';
import Spinner from './Spinner';

export default function Projects() {

    const navigateTo = useNavigate();
    const { currentUser } = useAuth();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showProjectList, setShowProjectList] = useState(true);
    const [isOwner, setisOwner] = useState(false);
    const [email, setEmail] = useState();

    const contextValue = useContext(MyGlobalContext);
    const [currentProject, setCurrentProject] = useState({
        title: '',
        id: '',
        info: '',
        team: '',
        owner: '',
    });
    const epochToDate = (epoch) =>{
        // // const createdDate = new Date(epoch);
        // // console.log(createdDate.getFullYear());
        // console.log(epoch.seconds || epoch);    
    }
   

    //*  get all projects where the current user's email is listed in Team Array
    useEffect(() => {
        setLoading(true);
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
            return (
                <div className='project-card-wrapper'
                    onClick={() => handleProjectChoice(project.id)}
                    value={project.id}
                    key={project.id}
                >
                    <ProjectCard
                        name={project.name}
                        info={project.info}
                        projectID={project.id}
                        team={project.team}
                        tasks={project.tasks}
                        createdAt={Date(project.created).slice(3, 16)}  //!!!!fix!!!!!!!!
                    />
                    <Link to={`/dashboard/project-overview/${project.id}`} />
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
        //*  contextValue[1] is setGlobalContext()
        contextValue[1]({...contextValue[0], title: current.name, projectOwner: current.owner, projectId: projID, info: current.info, team: [...current.team] });
        navigateTo(`/dashboard/project-overview/${projID}`);
    }
    return (
        <>
            {loading ? <Spinner /> :
                    <>
                    <div className='projects-container'> {!loading && mapProjects()} </div>
                    <div className='project-task-container'>
                        {!showProjectList && <ProjectOverview
                            title={currentProject.title || ''}
                            info={currentProject.info || ''}
                            team={currentProject.team || ''}
                            projectId={currentProject.id || ''} />
                        }
                    </div>
                </>
            }
        </>
    )
}

