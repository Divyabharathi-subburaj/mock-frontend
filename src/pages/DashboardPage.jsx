import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import ItemCard from '../components/ItemCard'
import ItemModal from '../components/ItemModal'
import ChartPanel from '../components/ChartPanel'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import { useAuth } from '../context/AuthContext'

export default function DashboardPage(){
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const { user } = useAuth()

  useEffect(()=> {
    fetch('/mock-data.json')
      .then(r=> r.json())
      .then(d=> setItems(d.items || []))
      .catch(()=> setItems([]))
  },[])

  const handleSearch = (q) => {
    setQuery(q)
    if(!q) return
    let recent = JSON.parse(localStorage.getItem('recentSearches')||'[]')
    if(!recent.includes(q)){
      recent.unshift(q)
      if(recent.length > 6) recent = recent.slice(0,6)
      localStorage.setItem('recentSearches', JSON.stringify(recent))
    }
  }

  let visible = items.filter(i =>
    i.title.toLowerCase().includes(query.toLowerCase()) ||
    i.category.toLowerCase().includes(query.toLowerCase())
  )
  if(filter !== 'All') visible = visible.filter(i=> i.category === filter)

  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-area">
        <Topbar />
        <main className="content container">
          <div className="hero">
            <div>
              <h1 className="title">Welcome back, {user?.name || 'User'}</h1>
              <p className="muted">Explore items, open details, and view visual summaries.</p>
            </div>
            <div className="hero-actions">
              <SearchBar onSearch={handleSearch} />
              <div className="controls">
                <select value={filter} onChange={e=> setFilter(e.target.value)}>
                  <option>All</option>
                  <option>Plants</option>
                  <option>Home</option>
                  <option>Kitchen</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                </select>
              </div>
            </div>
          </div>

          <section className="grid-section">
            <div className="cards">
              {visible.length === 0 ? <div className="card empty">No items match your search.</div> :
                visible.map(it => <ItemCard key={it.id} item={it} onOpen={()=> setSelected(it)} />)
              }
            </div>
            <aside className="sidebar-widgets">
              <ChartPanel items={items} />
              <div className="card">
                <h3>Recent searches</h3>
                <RecentSearches onPick={q=> setQuery(q)} />
              </div>
            </aside>
          </section>

          <Footer />
        </main>
      </div>

      {selected && <ItemModal item={selected} onClose={()=> setSelected(null)} />}
    </div>
  )
}

function RecentSearches({onPick}){
  const [recent, setRecent] = useState([])
  useEffect(()=> setRecent(JSON.parse(localStorage.getItem('recentSearches')||'[]')), [])
  if(recent.length === 0) return <div className="muted">No recent searches</div>
  return (
    <ul className="recent-list">
      {recent.map((r,idx)=> <li key={idx}><button className="link" onClick={()=> onPick(r)}>{r}</button></li>)}
    </ul>
  )
}
