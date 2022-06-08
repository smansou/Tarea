import React from 'react'
import { Route, useNavigate, Navigate  } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
  const {currentUser} = useAuth();
  const navigateTo = useAuth();
  return (
    <Route
    {...rest}
    render={props=>{
       return currentUser ? <Component {...props} /> : <Navigate to="/login" />
    }}
    >
      
    </Route>
  )
}
