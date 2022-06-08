import LoginPage from '../LoginPage';
import SignUP from '../SignUp';
import DashBoard from '../DashBoard';
import { AuthProvider } from '../contexts/AuthContext';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Task from '../Task';
import CreateTask from '../CreateTask';
import CreateProject from '../CreateProject';
import Projects from '../Projects';
import ProjectCard from '../ProjectCard';
import './homepage.css';

function HomePage() {
  const navigateTo = useNavigate();
  
  
  
  return (

<>
  
    <title>Cover Template for Semantic-UI</title>
   

    <div className="ui inverted vertical center aligned segment home-background">
      <nav className="ui container">
        <h1 className="ui inverted header">Tarea</h1>
        <div className="ui borderless inverted compact menu">
          <a className="active item">Home</a> <a onClick={()=>navigateTo('/login')} className="item">Login</a>
          <a className="item">Contact</a>
        </div>
      </nav>
      <div className="ui content container">
        <h1 className="ui inverted header">Create powerful workflows for your team</h1>
        <p>
        A user-first, visual, workflow management platform.
        </p>
        <div onClick={()=>navigateTo('/login')}  className="ui huge inverted button">Try Now </div>
      </div>



      <footer className="ui inverted vertical segment">
        Built for <a href="#"> Appleseeds </a> by
        <a href="https://github.com/smansou"> Sobhi Mansour</a>.
      </footer>
    </div>


        </>

    )
}

export default HomePage;

