import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Topbar(){
  const { user, logout } = useAuth()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(()=> {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <header className="topbar">
      <div className="logo">
        <div className="logo-mark" />
        <div className="logo-text">Mock<span className="accent">Store</span></div>
      </div>
      <div className="topbar-actions">
        <button onClick={()=> setTheme(t=> t==='dark'?'light':'dark')} className="btn small">{theme==='dark' ? 'Light' : 'Dark'}</button>
        <div className="user">
          <span className="muted">Signed in as</span>
          <strong>{user?.name}</strong>
          <button className="btn small ghost" onClick={logout}>Logout</button>
        </div>
      </div>
    </header>
  )
}
