export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b-[1.5px] border-[var(--ink)] min-h-[100vh] flex items-center pt-[100px] pb-[60px]">
      <div className="relative z-10 flex flex-col w-full px-[24px] min-[860px]:px-[10vw] gap-[28px] min-[860px]:gap-[36px]">

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
          <button className="font-[family-name:var(--font-dm-mono)] text-[0.75rem] tracking-[0.06em] uppercase cursor-pointer transition-colors hover:bg-[#333] text-[#FFFFFF] bg-[var(--ink)] border-[1.5px] border-[var(--ink)] py-[11px] px-[28px]">
            Lihat Projects
          </button>
          <button className="font-[family-name:var(--font-dm-mono)] text-[0.75rem] tracking-[0.06em] uppercase bg-transparent cursor-pointer transition-all hover:bg-[var(--ink)] hover:text-[#FFFFFF] text-[var(--ink)] border-[1.5px] border-[var(--ink)] py-[11px] px-[28px]">
            Tentang Saya
          </button>
        </div>

        <div className="fade-up-5 flex border-[1.5px] border-[var(--ink)] w-fit mt-[16px]">
          {[
            { num: '12+', label: 'Projects',   color: 'var(--blue)' },
            { num: '3+',  label: 'Tahun',      color: 'var(--red)' },
            { num: '8+',  label: 'Tech Stack', color: 'var(--green)' },
          ].map((s, idx) => (
            <div key={s.label} className={`flex flex-col items-center justify-center gap-[2px] p-[8px_20px] min-w-[90px] ${idx !== 2 ? 'border-r-[1.5px] border-[var(--ink)]' : ''}`}>
              <span className="font-[family-name:var(--font-syne)] font-bold text-[1.5rem] leading-none" style={{ color: s.color }}>
                {s.num}
              </span>
              <span className="font-[family-name:var(--font-dm-mono)] text-[0.55rem] uppercase font-bold tracking-[0.08em]" style={{ color: 'var(--muted)' }}>
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