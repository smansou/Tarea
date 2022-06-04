import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/HomePage';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import CreateProject from './components/CreateProject';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path="*" element={ <HomePage /> }></Route>
  </Routes>
  </BrowserRouter>    

);


