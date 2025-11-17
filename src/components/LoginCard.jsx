import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'

export default function LoginCard({ onLogin }){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const submit = (e) => {
    e.preventDefault()
    if(username.trim() === ''){
      alert('Enter a username')
      return
    }
    login(username.trim())
    if(onLogin) onLogin()
  }

  return (
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.4}} className="card auth-card">
      <h2 className="brand">Mock Store</h2>
      <p className="muted">Sign in (mock) to view dashboard</p>
      <form onSubmit={submit} className="form">
        <input value={username} onChange={e=> setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder="Password" />
        <button className="primary">Sign in</button>
      </form>
      <p className="muted small">Tip: any username works — this is mock auth for demo.</p>
    </motion.div>
  )
}
