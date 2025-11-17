import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

const COLORS = ['#7C3AED','#06B6D4','#F97316','#10B981','#F43F5E']

export default function ChartPanel({ items }){
  const counts = {}
  items.forEach(it => counts[it.category] = (counts[it.category] || 0) + 1)
  const data = Object.keys(counts).map(k => ({ name:k, value: counts[k] }))

  return (
    <div className="card charts-card" id="charts">
      <h3>Items by Category</h3>
      {data.length === 0 ? <div className="muted">No data</div> :
        <div style={{ width: '100%', height: 220 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" outerRadius={70} label>
                {data.map((entry, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
              </Pie>
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      }
    </div>
  )
}
