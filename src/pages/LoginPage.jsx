import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginCard from '../components/LoginCard'

export default function LoginPage(){
  const navigate = useNavigate()

  return (
    <div className="page center">
      <LoginCard onLogin={() => navigate('/dashboard')} />
    </div>
  )
}
