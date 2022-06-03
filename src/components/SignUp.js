import React, { useState, useRef } from 'react';
import { useAuth } from './contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


function SignUP(props) {


  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signup } = useAuth();
  const history = useNavigate();

  async function handleSubmit   (e) {
    e.preventDefault();
    if (passwordConfirmRef.current.value !==
      passwordRef.current.value) {
      return setError('Passwords Do Not Match');

    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setSuccess(true);
      history('/login');
    } catch {
      setError('Sign up failed');
    }
    setLoading(false);
  }

  return (
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >
     
      <header className="max-w-lg mx-auto">
     
          <h1 className="text-4xl font-bold text-white text-center">Startup</h1>
    
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        {error &&
          <div  className="bg-red-200 rounded w-full text-gray-700 px-3 pb-3">{error}</div>
         }
         {success &&
          <div  className="bg-Green-300 rounded w-full text-gray-700 px-3 pb-3">{'Success! your account has been created'}</div>
         }
        <section>
          <h3 className="font-bold text-2xl">Tarea</h3>
          <p className="text-gray-600 pt-2">Create a new account</p>
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
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Confirm Password</label>
              <input aria-required ref={passwordConfirmRef} type="password" id="confirmPassword" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>

            <div className="flex justify-end">
            </div>
            <button disabled={loading} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign Up</button>
            <p className="text-black">Already have an account?
             <Link to='/login' className="font-bold text-purple-600"> Login </Link>
            </p>
          </form>
        </section>
      </main>


      <footer className="max-w-lg mx-auto flex justify-center text-white">
        <a href="#" className="hover:underline">Contact</a>
        <span className="mx-3">•</span>
        <a href="#" className="hover:underline">Privacy</a>
      </footer>
    </div>
  );
}

export default SignUP;