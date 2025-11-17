import React, { useState } from 'react'

export default function SearchBar({ onSearch }){
  const [q, setQ] = useState('')
  return (
    <div className="searchbar">
      <input value={q} onChange={e=> setQ(e.target.value)} placeholder="Search items or categories..." />
      <button className="btn" onClick={()=> { onSearch(q); setQ(''); }}>Search</button>
    </div>
  )
}
