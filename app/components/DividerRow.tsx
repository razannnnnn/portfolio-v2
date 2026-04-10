const cells = [
  { label: 'Web Projects', color: 'var(--blue)' },
  { label: 'Full Stack',   color: 'var(--red)' },
  { label: 'UI / UX',      color: 'var(--green)' },
  { label: 'Open Source',  color: 'var(--yellow)' },
]

export default function DividerRow() {
  return (
    <div className="flex" style={{ borderBottom: '1.5px solid var(--ink)' }}>
      {cells.map((cell, i) => (
        <div key={i} className="flex-1 flex items-center gap-2 py-[10px] px-4 font-[family-name:var(--font-dm-mono)] text-[0.6rem] tracking-[0.1em] uppercase"
          style={{ borderRight: i < cells.length - 1 ? '1.5px solid var(--ink)' : 'none', color: 'var(--muted)' }}>
          <span className="w-[6px] h-[6px] rounded-full" style={{ background: cell.color, border: '1px solid currentColor' }} />
          {cell.label}
        </div>
      ))}
    </div>
  )
}