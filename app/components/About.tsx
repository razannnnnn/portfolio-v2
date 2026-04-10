const skills = [
  { label: 'HTML & CSS',   dot: 'var(--blue)' },
  { label: 'JavaScript',   dot: 'var(--red)' },
  { label: 'React',        dot: 'var(--green)' },
  { label: 'Next.js',      dot: 'var(--yellow)' },
  { label: 'Tailwind CSS', dot: 'var(--blue)' },
  { label: 'Node.js',      dot: 'var(--red)' },
  { label: 'MongoDB',      dot: 'var(--green)' },
  { label: 'Git & GitHub', dot: 'var(--yellow)' },
]

const badges = [
  { label: 'Frontend Dev', dot: 'var(--blue)' },
  { label: 'Backend Dev',  dot: 'var(--red)' },
  { label: 'UI Designer',  dot: 'var(--green)' },
]

export default function About() {
  return (
    <div id="about" className="about-grid grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
      {/* Left */}
      <div className="flex flex-col gap-6" style={{ padding: '80px 48px', borderRight: '1.5px solid var(--ink)' }}>
        <span className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-mono)] text-[0.68rem] tracking-[0.1em] uppercase w-fit"
          style={{ background: 'var(--red)', border: '1.5px solid var(--ink)', padding: '5px 12px' }}>
          × Tentang Saya
        </span>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold"
          style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', letterSpacing: '-2px', lineHeight: '1.1' }}>
          Pelajar yang<br />suka<br />
          <span style={{ color: 'var(--blue)', WebkitTextStroke: '1.5px #1a1a1a' }}>ngoding.</span>
        </h2>
        <p className="font-[family-name:var(--font-dm-mono)] text-[0.8rem]" style={{ color: '#555', lineHeight: '1.85' }}>
          Siswa SMA/SMK di Indonesia dengan passion di web development. Suka eksplorasi
          teknologi baru, dari frontend hingga backend, dan selalu mencoba bikin sesuatu yang beda.
        </p>
        <div className="flex gap-2 flex-wrap">
          {badges.map((b) => (
            <span key={b.label} className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-mono)] text-[0.65rem] tracking-wider uppercase bg-white"
              style={{ border: '1.5px solid var(--ink)', padding: '5px 10px' }}>
              <span className="w-[7px] h-[7px] rounded-full" style={{ background: b.dot, border: '1px solid var(--ink)' }} />
              {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-center" style={{ padding: '80px 48px' }}>
        <div className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
          Tech Stack
        </div>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', border: '1.5px solid var(--ink)' }}>
          {skills.map((s, i) => (
            <div key={i} className="skill-item flex items-center gap-2 font-[family-name:var(--font-dm-mono)] text-[0.7rem] transition-colors duration-150"
              style={{
                padding: '14px 16px',
                borderRight: (i + 1) % 2 !== 0 ? '1.5px solid var(--ink)' : 'none',
                borderBottom: i < skills.length - 2 ? '1.5px solid var(--ink)' : 'none',
              }}>
              <span className="w-[7px] h-[7px] rounded-full flex-shrink-0" style={{ background: s.dot, border: '1px solid var(--ink)' }} />
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}