import LoginPage from './LoginPage';
import SignUP from './SignUp';
import DashBoard from './DashBoard';
import { AuthProvider } from './contexts/AuthContext';
import { Routes, Route} from 'react-router-dom';
import Task from './Task';
import CreateTask from './CreateTask';
import CreateProject from './CreateProject';
import Projects from './Projects';
import Project from './Project';


function HomePage() {
  return (
   <div>
     
    <AuthProvider>
    <Routes>
     
      <Route path='/Dashboard' element={<DashBoard />} ></Route>
      <Route path='/Projects' element={<Projects />} ></Route>
      <Route path='/Signup' element={<SignUP />} ></Route>
      <Route path='/Login' element={<LoginPage />}></Route>
      <Route path='/Create-project' element={<CreateProject />} ></Route>
      <Route path='/Add-task' element={<CreateTask />} ></Route>
    </Routes>
   </AuthProvider>
   </div>

)}

export default HomePage;
