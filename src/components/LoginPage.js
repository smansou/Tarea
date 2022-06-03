import React, { useState, useRef } from 'react';
import { useAuth } from './contexts/AuthContext';
import {Link} from 'react-router-dom';
import { useNavigate} from "react-router-dom";



function SignUP(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useNavigate();

  async function handleSubmit   (e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history('/user-dashboard');
    } catch {
      setError('Log in failed');
    }
    setLoading(false);

  }

  return (
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >
      {error &&
       <div  className="bg-red-200 rounded w-full text-gray-700 px-3 pb-3">{error}</div>

      
      }
      <header className="max-w-lg mx-auto">
        <a href="#">
          <h1 className="text-4xl font-bold text-white text-center">Startup</h1>
        </a>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Welcome to Startup</h3>
        </section>

        <section className="mt-10">
          <form onSubmit={handleSubmit} className="flex flex-col" method="POST" action="#">
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
              <input aria-required ref={emailRef} type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
              <input aria-required ref={passwordRef} type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            
            <div className="flex justify-end">
            </div>
            
            <button disabled={loading} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Login </button>
            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className=" text-black">Don't have an account? 
        <Link className='font-bold text-purple-700' to='/signup'> Sign up</Link>
        </p>
      </div>
          </form>
        </section>
      </main>
     


    </div>
  );
}

export default SignUP;

