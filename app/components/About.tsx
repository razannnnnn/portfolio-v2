import { FaHtml5, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { label: 'HTML & CSS',   icon: <FaHtml5 size={14} />, color: 'var(--red)' },
  { label: 'JavaScript',   icon: <SiJavascript size={12} />, color: 'var(--yellow)' },
  { label: 'React',        icon: <FaReact size={14} />, color: 'var(--blue)' },
  { label: 'Next.js',      icon: <SiNextdotjs size={14} />, color: 'var(--green)' },
  { label: 'Tailwind CSS', icon: <SiTailwindcss size={14} />, color: 'var(--blue)' },
  { label: 'MongoDB',      icon: <SiMongodb size={14} />, color: 'var(--green)' },
  { label: 'Node.js',      icon: <FaNodeJs size={14} />, color: 'var(--red)' },
  { label: 'Git & GitHub', icon: <FaGithub size={14} />, color: 'var(--yellow)' },
]

const badges = [
  { label: 'Frontend Dev', dot: 'var(--blue)' },
  { label: 'Backend Dev',  dot: 'var(--red)' },
  { label: 'UI Designer',  dot: 'var(--green)' },
]

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 min-[860px]:grid-cols-2 border-b-[1.5px] border-[var(--ink)]">
      
      {/* Left */}
      <div className="p-[56px_24px] min-[860px]:p-[80px_52px] border-[var(--ink)] flex flex-col gap-[22px] reveal border-b-[1.5px] max-[859px]:border-r-0 min-[860px]:!border-b-0 min-[860px]:border-r-[1.5px]">
        <span className="inline-flex items-center gap-[8px] border-[1.5px] border-[var(--ink)] p-[4px_12px] w-fit text-[0.62rem] tracking-[0.11em] uppercase font-['DM_Mono',_monospace] bg-[var(--red)]">
          × Tentang Saya
        </span>
        
        <h2 className="font-['Instrument_Serif',_serif] text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.3px]">
          Pelajar yang<br/>suka bikin<br/>
          <em className="not-italic italic text-[var(--blue)] [-webkit-text-stroke:1.2px_var(--ink)] overflow-visible">hal keren.</em>
        </h2>
        
        <p className="text-[0.77rem] leading-[1.85] text-[#555] font-['DM_Mono',_monospace] align-justify">
          Saya Razan, seorang pelajar dengan ketertarikan mendalam pada dunia pengembangan web. Saat ini saya aktif mempelajari teknologi web modern sebagai bagian dari pengembangan diri saya.
Saya berkomitmen untuk membangun website yang fungsional, aman, dan dibangun di atas arsitektur teknologi yang relevan. Dalam setiap proyek, saya menggabungkan kemampuan teknis dengan komunikasi yang proaktif, pemikiran kritis, dan manajemen waktu yang baik — serta berusaha memberikan hasil yang optimal dan dampak yang nyata.
        </p>
        
        <div className="flex gap-[7px] flex-wrap mt-[6px]">
          {badges.map((b) => (
            <span className="border-[1.5px] border-[var(--ink)] px-[11px] py-[5px] text-[0.62rem] tracking-[0.07em] uppercase flex items-center gap-[6px] font-['DM_Mono',_monospace]" key={b.label}>
              <span className="w-[6px] h-[6px] rounded-full border-[1px] border-[var(--ink)]" style={{ background: b.dot }}></span>
              {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="grid grid-rows-[auto_1fr] reveal">
        <div className="p-[20px_24px_14px] min-[860px]:p-[20px_36px_14px] border-b-[1.5px] border-[var(--ink)] text-[0.62rem] uppercase tracking-[0.1em] text-[var(--muted)] font-['DM_Mono',_monospace]">
          × Tech Stack
        </div>
        
        <div className="grid grid-cols-1 min-[860px]:grid-cols-2">
          {skills.map((s, i) => (
            <div 
              key={i} 
              className={`p-[16px_24px] min-[860px]:p-[16px_20px] flex items-center gap-[10px] text-[0.7rem] transition-colors duration-200 cursor-default hover:bg-[rgba(0,0,0,0.03)] border-[var(--ink)] font-['DM_Mono',_monospace] border-b-[1.5px] last:border-b-0 max-[859px]:border-r-0 ${i < skills.length - 2 ? 'min-[860px]:border-b-[1.5px]' : 'min-[860px]:!border-b-0'} ${(i + 1) % 2 === 1 ? 'min-[860px]:border-r-[1.5px]' : 'min-[860px]:!border-r-0'}`}
            >
              <div 
                className="w-[28px] h-[28px] border-[1.5px] border-[var(--ink)] flex items-center justify-center text-[0.6rem] shrink-0 font-medium font-['DM_Mono',_monospace]" 
                style={{ background: s.color }}
              >
                {s.icon}
              </div>
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}