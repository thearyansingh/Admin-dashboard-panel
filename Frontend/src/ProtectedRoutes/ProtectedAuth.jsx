import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedAuth = ({auth,children}) => {
  console.log(auth)
  if(!auth){
    return <Navigate to="/" replace/>

  }
    return children
}

export default ProtectedAuth
