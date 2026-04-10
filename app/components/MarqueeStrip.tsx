const items = ['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Vercel', 'HTML · CSS', 'JavaScript']

export default function MarqueeStrip() {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden" style={{ borderBottom: '1.5px solid var(--ink)', background: 'var(--ink)', color: 'white', padding: '10px 0' }}>
      <div className="animate-marquee flex w-max">
        {doubled.map((item, i) => (
          <span key={i} className="font-[family-name:var(--font-dm-mono)] text-[0.7rem] tracking-[0.12em] uppercase whitespace-nowrap px-8 flex items-center gap-4 after:content-['×'] after:opacity-50">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}