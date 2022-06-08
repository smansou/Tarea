import React, { useState, useRef } from 'react';
import { useAuth } from './contexts/AuthContext';
import {Link} from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import './loginPage.css'




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
  </div>

  );
}

export default LoginPage;

/*
 <div classNameName="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >
      {error &&
       <div  classNameName="bg-red-200 rounded w-full text-gray-700 px-3 pb-3">{error}</div>

      
      }
      <header classNameName="max-w-lg mx-auto">
    
          <h1 classNameName="text-4xl font-bold text-white text-center">Startup</h1>
     
      </header>

      <main classNameName="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 classNameName="font-bold text-2xl">Welcome to Startup</h3>
        </section>

        <section classNameName="mt-10">
          <form onSubmit={handleSubmit} classNameName="flex flex-col" method="POST" action="#">
            <div classNameName="mb-6 pt-3 rounded bg-gray-200">
              <label classNameName="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
              <input aria-required ref={emailRef} type="text" id="email" classNameName="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            <div classNameName="mb-6 pt-3 rounded bg-gray-200">
              <label classNameName="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
              <input aria-required ref={passwordRef} type="password" id="password" classNameName="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            
            <div classNameName="flex justify-end">
            </div>
            
            <button disabled={loading} classNameName="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Login </button>
            <div classNameName="max-w-lg mx-auto text-center mt-12 mb-6">
        <p classNameName=" text-black">Don't have an account? 
        <Link classNameName='font-bold text-purple-700' to='/signup'> Sign up</Link>
        </p>
      </div>
          </form>
        </section>
      </main>
     


    </div>

    */