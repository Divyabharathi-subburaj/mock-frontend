import React from 'react'
import { motion } from 'framer-motion'

export default function ItemCard({ item, onOpen }){
  return (
    <motion.div whileHover={{ y:-6 }} className="card item-card">
      <div className="thumb">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="card-body">
        <h4>{item.title}</h4>
        <div className="meta">{item.category} • ⭐ {item.rating}</div>
        <div className="card-foot">
          <strong>₹{item.price}</strong>
          <button className="btn small" onClick={onOpen}>View</button>
        </div>
      </div>
    </motion.div>
  )
}
