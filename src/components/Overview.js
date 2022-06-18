import React, { useState, useEffect, useContext } from 'react'
import List from './List'
import { collection, doc, getDoc, getDocs, arrayUnion, arrayRemove, query, where, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebase/firebase';
import './overview.css';
import PieChart from './PieChart';
import { useAuth } from './contexts/AuthContext';
import DashCard from './DashCard.js/DashCard';
import BarChart from './BarChart';
export default function Overview() {

  const [totalProjects, setTotalProjects] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const { currentUser } = useAuth();

  useEffect(() => {
    //* setLoading(true); ////
    const projectsRef = collection(db, 'projects');
    let allProjects = [];
    const q = query(projectsRef, where("owner", '==', currentUser.email))
    getDocs(q)
      .then((snapshot) => {
        let tasksNum = 0;
        let tasksCompleted = 0;

        snapshot.docs.forEach((doc, i) => {
          allProjects.push({ ...doc.data() });
          tasksNum += allProjects[i].tasks.length;
          const completedTasks = allProjects[i].tasks.filter(t => t.completed)
          tasksCompleted += completedTasks.length;

        })
        setTotalProjects(allProjects.length);
        setTotalTasks(tasksNum);
        setTasksCompleted(tasksCompleted);
        //* setLoading(false); /////
      }).catch((error) => {
        console.log(error, "failed to fetch projects");
      })
  }, []);

  return (
    <div className="overview">
      <div className="overview-left">
        <div className="left-overview-top">
            <DashCard title={'Projects'} stat={totalProjects} />
            <DashCard title={'Owned Projects'} stat={'owned projects here'}/>
            <DashCard title={'Owned Projects'} stat={'owned projects'}/>
        </div>
        <div className="left-overview-bottom">
          <div className="left-overview-bottom-left">
            <List />
          </div>
          <div className="left-overview-bottom-right">
            abcd          
          </div>
        </div>
      </div>
      <div className="overview-right">
          <div className="right-overview-top">
          <PieChart
            title="Tasks Completed/All"
            dataNamesArray={['Total Tasks', 'Completed Tasks']}
            dataArray={[totalTasks, tasksCompleted]}
            />
          </div>
          <div className="right-overview-bottom">
          </div>
      </div>

    </div>
  )

}
