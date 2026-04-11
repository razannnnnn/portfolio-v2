'use client'
import { useEffect, useState } from 'react'

interface CrossItem {
  id: number
  char: string
  left: string
  top: string
  fontSize: string
  opacity: string
}

export default function BackgroundCrosses() {
  const [crosses, setCrosses] = useState<CrossItem[]>([])

  useEffect(() => {
    const symbols = ['×', '·', '×', '·', '×', '×', '·']
    const generated: CrossItem[] = []
    
    // Generate 80 floating elements mimicking original design logic
    for (let i = 0; i < 80; i++) {
      generated.push({
        id: i,
        char: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100 + 'vw',
        top: Math.random() * 300 + 'vh',
        fontSize: (9 + Math.random() * 6) + 'px',
        opacity: (0.04 + Math.random() * 0.08).toFixed(3)
      })
    }
    
    setCrosses(generated)
  }, [])

  if (crosses.length === 0) return null

  return (
    <div className="cross-pattern fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {crosses.map((c) => (
        <span
          key={c.id}
          className="absolute select-none font-[family-name:var(--font-dm-mono)]"
          style={{
            color: '#00000015',
            left: c.left,
            top: c.top,
            fontSize: c.fontSize,
            opacity: c.opacity
          }}
        >
          {c.char}
        </span>
      ))}
    </div>
  )
}
