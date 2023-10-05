import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'

export default function Login() {
  const { logIn } = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmite = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
<div className='h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/ff10facb-0aab-4381-ae02-8f0d30887c99/MA-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24">
            <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white rounded">
                <div className="max-w-[320px] mx-auto py-16">
                  <h1 className="text-3xl font-bold">Singn In</h1>
                  <form className='w-full flex flex-col py-4' onSubmit={handleSubmite}>
                    <input 
                    type="email" 
                    placeholder='Email' 
                    autoComplete='Email' 
                    className='p-3 my-2 bg-transparent rouded'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                    type="password" 
                    placeholder='Password' 
                    autoComplete='current-password' 
                    className='p-3 my-2 bg-transparent rouded'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-700'>Sign In</button>
                    <div className='flex justify-between text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p className='cursor-pointer'>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>
                    New to Netflex ?
                  </span>{' '}
                  <Link to='/register' className='hover:text-red-500'>Sign Up</Link>
                </p>
                {error && <span className='text-red-600 text-sm text-center'>{error}</span>}
                  </form>
                </div>
            </div>
        </div>
    </div>  )
}
