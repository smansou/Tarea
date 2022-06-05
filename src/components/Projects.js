import React, { useState, useEffect } from 'react'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useNavigate, Route, Routes } from 'react-router';
import { useAuth } from './contexts/AuthContext';
import ProjectCard from './ProjectCard';
import ProjectOverview from './ProjectOverview';
import './projects.css'



export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [projectID, setProjectID] = useState('');
    const [projectVisible, setProjectVisible] = useState(false);
    const [currentProject, setCurrentProject] = useState({
        title: '',
        id: '',
        info: '',
        team: ''
    });
    const navigateTo = useNavigate();
    const { currentUser } = useAuth();

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

    const handleProjectChoice = (projID) => {
    
        const current = projects.find(project => project.id === projID)
        setCurrentProject({
            title: current.name,
            id: projID,
            info: current.info,
            team: [...current.team]
        })
        projectVisible ? setProjectVisible(false) : setProjectVisible(true);
    }



    const mapProjects = () => {
        return projects.map((project) => {

            return (
                <div onClick={() => handleProjectChoice(project.id)} value={project.id} key={project.id} className='ui segment'>
                    <ProjectCard
                        name={project.name}
                        info={project.info}
                        projectID={project.id}
                        team={project.team} />
                    {/* <Routes>
                            <Route path={`/Projects/${project.id}`} render={()=>{<ProjectCard iid={project.id} />}}>
                          </Route>
                        </Routes> */}

                </div>


            )
        })
    }


    return (
        <div className='overviews'>
            <div className='projects-conatiner'>
                {!loading && mapProjects()}
            </div>
            <div className='project-overview'>
                {projectVisible && <ProjectOverview title={currentProject.title} info={currentProject.info} team={currentProject.team} projectId={currentProject.id} />}
            </div>
        </div>
    )
}
