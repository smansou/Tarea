import '../App.css';
import LoginPage from './LoginPage';
import SignUP from './SignUp';
import AdminDash from './AdminDash';
import TeamDash from './TeamDash';
import { AuthProvider } from './contexts/AuthContext';
import { Routes, Route} from 'react-router-dom';


function HomePage() {
  return (
   <div>
    <AuthProvider>
    <Routes>
      <Route path='/control-dashboard' element={<AdminDash />} ></Route>
      <Route path='/user-dashboard' element={<TeamDash />} ></Route>
      <Route path='/signup' element={<SignUP />} ></Route>
      <Route path='/login' element={<LoginPage />} ></Route>
    </Routes>
   </AuthProvider>
   </div>

)}

export default HomePage;
