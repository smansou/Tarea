import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import LoginPage from './components/LoginPage'
import SignUP from './components/SignUp';
import CreateTask from './components/CreateTask';
import CreateProject from './components/CreateProject';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';
import { AuthProvider } from './components/contexts/AuthContext';
import HomePage from './components/Homepage/HomePage';
import TaskOverview from './components/TaskOverview';
import AddTeam from './components/AddTeam';
import Overview from './components/Overview';
import ProjectOverview from './components/ProjectOverview';
import GlobalContext from './components/contexts/GlobalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <BrowserRouter>

    {/* <Routes>
  <Route path="*" element={ <HomePage /> }></Route>
</Routes> */}
  <GlobalContext>
    <AuthProvider>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='Login' element={<LoginPage />}></Route>
        <Route path='Signup' element={<SignUP />} ></Route>
        <Route path='Dashboard' element={<DashBoard />} >
            <Route exact path='project-overview/:id' element={<ProjectOverview />} >
        <Route path='task-overview/:id' element={<TaskOverview />} ></Route> //?

            </Route>
            <Route exact path='Overview' element={<Overview />} ></Route>
          <Route exact path='Projects' element={<Projects />} >
          
            <Route path='Create-task' element={<CreateTask />} ></Route>
            <Route path='add-team' element={<AddTeam />} ></Route>
          <Route exact path='ProjectCard' element={<ProjectCard />} ></Route>

          </Route>
          <Route path='Create-project' element={<CreateProject />} ></Route>

        </Route>

      </Routes>
    </AuthProvider>

    </GlobalContext>

  </BrowserRouter>


);

