export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', borderBottom: '1.5px solid var(--ink)' }}>
      <div className="relative z-10 flex flex-col" style={{ padding: '80px 10vw', gap: '36px' }}>

        <span className="fade-up-1 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.1em] uppercase w-fit font-[family-name:var(--font-dm-mono)]"
          style={{ background: 'var(--green)', border: '1.5px solid var(--ink)', padding: '5px 12px' }}>
          × Web Developer · Indonesia
        </span>

        <h1 className="fade-up-2 font-[family-name:var(--font-syne)] font-extrabold"
          style={{ fontSize: 'clamp(4rem,10vw,9rem)', lineHeight: '0.95', letterSpacing: '-4px' }}>
          Crafting<br />
          <span className="accent-blue">Digital</span><br />
          <span className="accent-red">Projects</span>
        </h1>

        <p className="fade-up-3 text-[1rem] max-w-[560px] font-[family-name:var(--font-dm-mono)]"
          style={{ color: '#555', lineHeight: '1.75' }}>
          Koleksi project website yang dibuat dengan penuh perhatian terhadap detail,
          desain, dan fungsionalitas. Dari landing page hingga full-stack web app.
        </p>

        <div className="fade-up-4 flex gap-3 items-center">
          <button className="font-[family-name:var(--font-dm-mono)] text-[0.75rem] tracking-[0.06em] uppercase cursor-pointer transition-colors hover:bg-[#333]"
            style={{ background: 'var(--ink)', color: 'white', border: '1.5px solid var(--ink)', padding: '11px 28px' }}>
            Lihat Projects
          </button>
          <button className="font-[family-name:var(--font-dm-mono)] text-[0.75rem] tracking-[0.06em] uppercase bg-transparent cursor-pointer transition-all hover:bg-[var(--ink)] hover:text-white"
            style={{ color: 'var(--ink)', border: '1.5px solid var(--ink)', padding: '11px 28px' }}>
            Tentang Saya
          </button>
        </div>

        <div className="fade-up-5 flex gap-10 pt-7" style={{ borderTop: '1.5px solid #ddd' }}>
          {[
            { num: '12+', label: 'Projects',   color: 'var(--blue)' },
            { num: '3+',  label: 'Tahun',      color: 'var(--red)' },
            { num: '6+',  label: 'Tech Stack', color: 'var(--green)' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-[family-name:var(--font-syne)] font-bold text-2xl leading-none" style={{ color: s.color }}>
                {s.num}
              </span>
              <span className="font-[family-name:var(--font-dm-mono)] text-[0.65rem] uppercase tracking-[0.08em]" style={{ color: 'var(--muted)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-bg-text">DEV</div>
    </section>
  )
}