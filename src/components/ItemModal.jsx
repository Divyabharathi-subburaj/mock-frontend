import React from 'react'
import { motion } from 'framer-motion'

export default function ItemModal({ item, onClose }){
  return (
    <div className="modal">
      <motion.div className="modal-card" initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}}>
        <button className="close" onClick={onClose}>✕</button>
        <div className="modal-body">
          <div className="modal-thumb"><img src={item.image} alt={item.title} /></div>
          <div className="modal-info">
            <h2>{item.title}</h2>
            <p className="muted">{item.category} • ⭐ {item.rating}</p>
            <p>{item.description}</p>
            <div className="modal-buy">
              <strong className="price">₹{item.price}</strong>
              <button className="btn">Buy (demo)</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
