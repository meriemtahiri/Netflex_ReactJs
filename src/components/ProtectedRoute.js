import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'

export default function ProtectedRoute({ children }) {
    const { currentUser } = UserAuth()
    
    if(currentUser) return children

    return <Navigate to={'/'} />

}