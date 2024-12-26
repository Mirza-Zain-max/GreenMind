import React from 'react'
import { useAuthContext } from 'Context/Auth'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const { isAuth } = useAuthContext()
    return isAuth ? <Outlet /> : <Navigate to={'/'} />
}

export default PrivateRoutes