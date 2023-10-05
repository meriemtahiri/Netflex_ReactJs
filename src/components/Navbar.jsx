import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/authContext';

export default function Navbar() {
  const { currentUser, logOut } = UserAuth()
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-500 text-4xl font-bold cursor-pointer'>NETFLEX</h1>
      </Link>
        <div>
        {currentUser? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={
              async () => {
                try {
                  await logOut()
                  navigate('/')
                } catch (error) {
                  console.log(error)
                }
              }
            }
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/register'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
        </div>
    </div>
  )
}
