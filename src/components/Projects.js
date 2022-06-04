import React, {useState, useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useNavigate, Route, Routes } from 'react-router';



export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [projectID, setProjectID] = useState();
    const navigateTo = useNavigate();
    //? get all projects from DB and parse relevant data into new obj array
    
     useEffect(()=>{
        const projectsRef = collection(db, 'projects');
        let allProjects = [];
        getDocs(projectsRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                allProjects.push({ ...doc.data(), id: doc.id });
            })
            setProjects(allProjects);
            setProjectID(allProjects.id);
            
           setLoading(false);
           
            }).catch((error) => {
                console.log(error, "failed to fetch projects");
            })
     },[]);

    


     const mapProjects = () => {
        return projects.map((project) => {
            return (
                <div onClick={()=>{navigateTo(`/projects/${project.id}`)}} key={project.id} className='ui segment'>
                <h2>name: {project.name} </h2>
                {/* <h3>created:{project.created}</h3> */}
                <h3>info:{project.info}</h3>
                {
                     <Routes>
                     <Route path={`/Projects/${project.id}`}></Route>
                    </Routes>
                    }
                <h3>collaborators: {project.team}</h3>
                  </div>
              
              
            )
        })
    }
    

    return (
        <div>
            {/* {console.log(projects)} */}
            {!loading && mapProjects()}
        </div>
    )
}
