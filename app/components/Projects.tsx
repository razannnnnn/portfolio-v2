const tagBg: Record<string, string> = {
  blue: 'var(--blue)', red: 'var(--red)', green: 'var(--green)',
  yellow: 'var(--yellow)', purple: 'var(--purple)',
}

const projects = [
  { num: '01', name: 'HostImgAjaa',  desc: 'Platform image hosting full-stack dengan Next.js, Cloudinary & MongoDB Atlas.',                   tags: [{ label: 'Next.js', color: 'blue' }, { label: 'MongoDB', color: 'green' }],  bg: 'var(--blue)'   },
  { num: '02', name: 'QuizKu App',   desc: 'Aplikasi kuis interaktif dengan sistem navigasi bertingkat dan manajemen soal.',                    tags: [{ label: 'Mobile', color: 'red' }, { label: 'UI/UX', color: 'yellow' }],     bg: 'var(--red)'    },
  { num: '03', name: 'Landing Page', desc: 'Halaman landing modern dengan animasi CSS, responsive layout, dan micro-interactions.',             tags: [{ label: 'HTML/CSS', color: 'green' }, { label: 'JS', color: 'blue' }],      bg: 'var(--green)'  },
  { num: '04', name: 'Dashboard UI', desc: 'Komponen dashboard admin dengan chart interaktif, tabel data, dan sistem filter.',                  tags: [{ label: 'React', color: 'yellow' }, { label: 'Tailwind', color: 'blue' }],  bg: 'var(--yellow)' },
  { num: '05', name: 'REST API',     desc: 'Backend API dengan autentikasi JWT, role management, dan dokumentasi Swagger.',                     tags: [{ label: 'Node.js', color: 'purple' }, { label: 'Express', color: 'green' }], bg: 'var(--purple)' },
  { num: '06', name: 'Portfolio v1', desc: 'Versi pertama portfolio dengan animasi GSAP, tema gelap, dan layout grid dinamis.',                 tags: [{ label: 'HTML', color: 'blue' }, { label: 'CSS', color: 'red' }, { label: 'GSAP', color: 'green' }], bg: 'var(--blue)' },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 48px', borderBottom: '1.5px solid var(--ink)' }}>
      {/* Header */}
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', letterSpacing: '-1.5px' }}>
          <span className="w-3 h-3 rounded-full" style={{ background: 'var(--blue)', border: '1.5px solid var(--ink)' }} />
          All Projects
          <span className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] tracking-[0.08em] uppercase" style={{ color: 'var(--muted)' }}>— 06 works</span>
        </h2>
        <a href="#" className="font-[family-name:var(--font-dm-mono)] text-[0.72rem] uppercase tracking-[0.08em] no-underline"
          style={{ color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: '1px' }}>
          View Archive →
        </a>
      </div>

      {/* Grid */}
      <div className="projects-grid grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', border: '1.5px solid var(--ink)' }}>
        {projects.map((p, i) => (
          <div key={i} className="proj-card cursor-pointer relative overflow-hidden transition-colors duration-200"
            style={{
              borderRight: (i + 1) % 3 !== 0 ? '1.5px solid var(--ink)' : 'none',
              borderBottom: i < 3 ? '1.5px solid var(--ink)' : 'none',
            }}>
            {/* Thumb */}
            <div className="proj-thumb w-full relative flex items-center justify-center font-[family-name:var(--font-syne)] font-extrabold text-[2rem]"
              style={{ height: '140px', background: p.bg, borderBottom: '1.5px solid var(--ink)', color: 'rgba(0,0,0,0.15)', letterSpacing: '-2px' }}>
              <span className="absolute top-[10px] left-3 font-[family-name:var(--font-dm-mono)] text-[0.6rem] tracking-wider z-10"
                style={{ color: 'rgba(0,0,0,0.35)' }}>{p.num}</span>
              PROJECT
            </div>
            {/* Body */}
            <div style={{ padding: '16px 18px 20px' }}>
              <div className="font-[family-name:var(--font-syne)] font-bold text-[0.92rem] mb-1" style={{ letterSpacing: '-0.3px' }}>{p.name}</div>
              <div className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] mb-3" style={{ color: '#777', lineHeight: '1.6' }}>{p.desc}</div>
              <div className="flex gap-1 flex-wrap">
                {p.tags.map((t, ti) => (
                  <span key={ti} className="font-[family-name:var(--font-dm-mono)] text-[0.6rem] uppercase tracking-wider px-2 py-[3px]"
                    style={{ background: tagBg[t.color], border: '1.5px solid var(--ink)' }}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}