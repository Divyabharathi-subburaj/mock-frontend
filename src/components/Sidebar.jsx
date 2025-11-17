import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar(){
  const loc = useLocation()
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className={loc.pathname === '/dashboard' ? 'active' : ''}><Link to="/dashboard">Dashboard</Link></li>
          <li><a href="#items">Items</a></li>
          <li><a href="#charts">Charts</a></li>
        </ul>
      </nav>
      <div className="sidebar-footer muted">Frontend Track — Mock JSON</div>
    </aside>
  )
}
