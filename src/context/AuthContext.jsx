import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('mock_user')
    if(stored) setUser(JSON.parse(stored))
  },[])

  const login = (username) => {
    const u = { name: username, id: Date.now() }
    localStorage.setItem('mock_user', JSON.stringify(u))
    setUser(u)
  }

  const logout = () => {
    localStorage.removeItem('mock_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}
