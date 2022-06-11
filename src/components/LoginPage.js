import React, { useState, useRef } from 'react';
import { useAuth } from './contexts/AuthContext';
import {Link} from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import './loginPage.css'
import Spinner from './Spinner';




function LoginPage(props) {
  const emailRefLogin = useRef();
  const passwordRefLogin = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const { login } = useAuth();
  const navigateTo = useNavigate();
  const { signup } = useAuth();
  const emailRefSignup = useRef();
  const passwordRefSignup = useRef();
  const passwordConfirmRefSignup = useRef();


  async function handleSubmitLogin (e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRefLogin.current.value, passwordRefLogin.current.value);
      navigateTo('/dashboard/overview');
    } catch {
      setError('Log in failed');
      setShowError(true);
      setTimeout(()=>{setShowError(false)},3000)
    }
    setLoading(false);

  }

  async function handleSubmitSignup   (e) {
    e.preventDefault();
    if (passwordConfirmRefSignup.current.value !==
      passwordRefSignup.current.value) {
        setShowError(true);
        setTimeout(()=>{setShowError(false)},3000)
      return setError('Passwords Do Not Match');

    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRefSignup.current.value, passwordRefSignup.current.value);
      navigateTo('/dashboard/overview');
    } catch {
      setError('Sign up failed');
    }
    setLoading(false);
  }

  return (

<div className="loginWrapper">  
    {
    loading ? <Spinner /> :
	<div className="login-main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
      {showError &&  <p className='ui message popup-message'>{error}</p> }
			<div className="signup">
				<form onSubmit={handleSubmitSignup}>
					<label className='loginLabel' htmlFor="chk" aria-hidden="true">Sign up</label>
					<input className='login-input' ref={emailRefSignup} type="email" name="txt" placeholder="Email" required=""/>
					<input className='login-input' ref={passwordRefSignup} type="password" name="email" placeholder="Password" required=""/>
					<input className='login-input' ref={passwordConfirmRefSignup} type="password" name="pswd" placeholder="Confirm Password" required=""/>
					<button className='login-btn'>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form onSubmit={handleSubmitLogin}>
					<label className='loginLabel' htmlFor="chk" aria-hidden="true">Sign in</label>
					<input className='login-input' ref={emailRefLogin} type="email" name="email" placeholder="Email" required=""/>
					<input className='login-input' ref={passwordRefLogin} type="password" name="pswd" placeholder="Password" required=""/>
					<button className='login-btn' type={'submit'}>Sign in</button>
				</form>
			</div>
	</div>
}
  </div>
  
  );
}

export default LoginPage;