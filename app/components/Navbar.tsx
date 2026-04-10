'use client'

export default function Navbar() {
  return (
    <nav
  className="flex justify-between items-center sticky top-0 z-50 bg-[#fafafa]/85 backdrop-blur-sm"
  style={{ padding: '20px 48px', borderBottom: '1.5px solid var(--ink)' }}
>
      <div className="flex items-center gap-2 font-[family-name:var(--font-syne)] font-extrabold text-[1.1rem] tracking-tight">
        <span className="w-[10px] h-[10px] rounded-full" style={{ background: 'var(--blue)', border: '1.5px solid var(--ink)' }} />
        razan.dev
      </div>

      <ul className="flex gap-8 list-none text-[0.75rem] tracking-[0.08em] uppercase font-[family-name:var(--font-dm-mono)]">
        {['Home', 'Projects', 'About', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link text-[var(--ink)] no-underline">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
  className="nav-cta shrink-0 font-mono text-[0.72rem] tracking-[0.08em] uppercase px-[18px] py-[7px] bg-transparent cursor-pointer"
  style={{ border: '1.5px solid var(--ink)' }}
>
  Hire Me
</button>
    </nav>
  )
}