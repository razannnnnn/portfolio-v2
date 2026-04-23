"use client";

import { useState } from 'react';
import Image from 'next/image';

const allProjectsData = [
  { num: '01', category: 'Full Stack', name: 'HostImgAjaa', link: 'https://hostimgajaa.razan.web.id', image: 'https://hostimgajaa.razan.web.id/api/i/8389bb21-e1f2-432f-9310-fe23f51dc481.png', desc: 'Platform image hosting gratis dengan upload Cloudinary, autentikasi NextAuth, dan animasi WebGL.', tags: [{ label: 'Next.js', color: 'bg-[var(--blue)]' }, { label: 'MongoDB', color: 'bg-[var(--green)]' }, { label: 'Cloudinary', color: 'bg-[var(--red)]' }], bgClass: 'bg-[var(--blue)]', thumbLabel: 'IMG' },
  { num: '02', category: 'Full Stack', name: 'PromptBetter', link: 'https://promptbetter-nine.vercel.app', image: 'https://hostimgajaa.razan.web.id/api/i/e4a22f08-b56e-4a5c-a2a0-563014ab66b9.png', desc: 'Website untuk mengubah prompt biasa menjadi luar biasa', tags: [{ label: 'Next.js', color: 'bg-[var(--blue)]' }, { label: 'MongoDB', color: 'bg-[var(--green)]' }, { label: 'GROQ AI', color: 'bg-[var(--red)]' }, { label: 'Tailwind', color: 'bg-[var(--blue)]' }], bgClass: 'bg-[var(--red)]', thumbLabel: 'QUIZ' },
  { num: '03', category: 'Frontend', name: 'NgopiDiBlitar', link: 'https://ngopidiblitar.my.id', image: 'https://hostimgajaa.razan.web.id/api/i/ae762bbc-0f75-4143-8bb0-d714ea765b08.png', desc: 'Halaman rekomendasi dan list cafe-cafe di Kota Blitar', tags: [{ label: 'Next.js', color: 'bg-[var(--green)]' }, { label: 'Tailwind', color: 'bg-[var(--blue)]' }, { label: 'Google Sheets API', color: 'bg-[var(--green)]' }], bgClass: 'bg-[var(--green)]', thumbLabel: 'LAND' },
  { num: '04', category: 'Full Stack', name: 'RumahFilm', link: 'https://rumahfilm.razan.web.id', image: 'https://hostimgajaa.razan.web.id/api/i/5e05508d-0031-4574-8701-e46269e9e976.png', desc: 'Platform streaming film online bersih, nyaman, gratis', tags: [{ label: 'Next.js', color: 'bg-[var(--green)]' }, { label: 'Tailwind', color: 'bg-[var(--blue)]' }], bgClass: 'bg-[var(--green)]', thumbLabel: 'LAND' },
]

const filtersList = [
  { id: 'Semua', label: 'Semua', color: 'var(--ink)' },
  { id: 'Frontend', label: 'Frontend', color: 'var(--blue)' },
  { id: 'Backend', label: 'Backend', color: 'var(--red)' },
  { id: 'Next.js', label: 'Next.js', color: 'var(--green)' },
  { id: 'Vite', label: 'Vite', color: 'var(--yellow)' },
  { id: 'Lainnya', label: 'Lainnya', color: 'var(--blue2)' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filteredProjects = activeFilter === 'Semua'
    ? allProjectsData
    : allProjectsData.filter(p =>
        p.category === activeFilter ||
        p.tags.some(t => t.label.toLowerCase() === activeFilter.toLowerCase())
      );

  return (
    <>
      {/* FILTER BAR */}
      <div className="flex items-center gap-0 px-[24px] min-[860px]:px-[52px] border-b-[1.5px] border-[var(--ink)] overflow-x-auto bg-[rgba(248,247,245,0.6)] backdrop-blur-[6px] [&::-webkit-scrollbar]:hidden">
        {filtersList.map((filter, i) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`p-[14px_22px] text-[0.64rem] tracking-[0.1em] uppercase font-[family-name:var(--font-dm-mono)] bg-transparent border-none border-r-[1.5px] border-[var(--ink)] cursor-pointer whitespace-nowrap transition-colors duration-200 flex items-center gap-[7px] first:border-l-[1.5px] first:ml-auto last:mr-auto hover:bg-[var(--ink)] hover:text-white group ${activeFilter === filter.id ? 'bg-[var(--ink)] text-white relative after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[var(--blue)]' : ''}`}
          >
            <span
              className={`w-[7px] h-[7px] rounded-full border-[1px] border-[var(--ink)] transition-colors duration-200 group-hover:bg-white group-hover:border-white ${activeFilter === filter.id ? 'bg-white border-white' : ''}`}
              style={{ background: filter.id === 'Semua' ? (activeFilter === 'Semua' ? '#fff' : 'transparent') : filter.color }}
            ></span>
            {filter.label}
          </button>
        ))}
      </div>

      {/* GRID PROJECTS */}
      <section id="projects" className="p-[40px_24px_60px] min-[860px]:p-[60px_52px_80px] border-b-[1.5px] border-[var(--ink)]">
        <div className="flex justify-between items-baseline mb-[40px]">
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold tracking-[-1px] flex items-center gap-[12px] m-0">
            <span className="w-[11px] h-[11px] rounded-full bg-[var(--blue)] border-[1.5px] border-[var(--ink)] inline-block"></span>
            Project Gallery
          </h2>
          <span className="font-[family-name:var(--font-dm-mono)] text-[0.65rem] text-[var(--muted)] tracking-[0.09em]">— {filteredProjects.length < 10 ? '0' + filteredProjects.length : filteredProjects.length} projects</span>
        </div>

        <div className="grid grid-cols-1 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3 gap-0 border-[1.5px] border-[var(--ink)]">
          {filteredProjects.length > 0 ? filteredProjects.map((p, i) => (
            <div
              key={i}
              onClick={() => p.link && window.open(p.link, '_blank')}
              className="border-[var(--ink)] border-b-[1.5px] border-r-[1.5px] cursor-pointer relative overflow-hidden bg-[var(--white)] transition-colors duration-[250ms] hover:bg-[#fcfcfc] flex-col group max-[600px]:!border-r-0 max-[600px]:last:!border-b-0 min-[601px]:max-[900px]:[&:nth-child(2n)]:border-r-0 min-[601px]:max-[900px]:[&:nth-last-child(-n+2):nth-child(2n+1)]:border-b-0 min-[601px]:max-[900px]:[&:nth-last-child(-n+2):nth-child(2n+1)_~_&]:border-b-0 min-[901px]:[&:nth-child(3n)]:border-r-0 min-[901px]:[&:nth-last-child(-n+3):nth-child(3n+1)]:border-b-0 min-[901px]:[&:nth-last-child(-n+3):nth-child(3n+1)_~_&]:border-b-0"
            >
              <div className={`w-full aspect-[16/9] flex items-center justify-center border-b-[1.5px] border-[var(--ink)] relative overflow-hidden transition-all duration-300 group-hover:brightness-95 ${p.bgClass}`}>
                {p.image ? (
                  <Image src={p.image} alt={p.name} fill className="object-cover z-[1]" sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.38)_1px,transparent_1px)] bg-[size:16px_16px] z-[1]"></div>
                    <span className="absolute top-[10px] left-[12px] z-[2] text-[0.58rem] text-[rgba(28,28,28,.35)] tracking-[0.1em] font-[family-name:var(--font-dm-mono)]">{p.num}</span>
                    <span className="font-[family-name:var(--font-instrument-serif)] text-[2.5rem] italic text-[rgba(28,28,28,.15)] tracking-[-1px] relative z-[2] select-none">{p.thumbLabel}</span>
                  </>
                )}
                <div className="absolute top-0 left-0 w-full h-full z-[10] bg-[#1A1A1A]/60 backdrop-blur-md flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[#FFFFFF] text-[0.68rem] tracking-[0.12em] uppercase border-[1.5px] border-white/60 p-[8px_18px] font-[family-name:var(--font-dm-mono)]">Buka Detail →</span>
                </div>
              </div>

              <div className="p-[16px_18px_20px]">
                <div className="font-[family-name:var(--font-syne)] font-extrabold text-[0.88rem] tracking-[-0.2px] mb-[5px]">{p.name}</div>
                <div className="text-[0.67rem] text-[#777] leading-[1.65] mb-[12px] font-[family-name:var(--font-dm-mono)]">{p.desc}</div>
                <div className="flex gap-[5px] flex-wrap">
                  {p.tags.map((t, ti) => (
                    <span key={ti} className={`border-[1.5px] border-[var(--ink)] text-[0.56rem] p-[2px_7px] uppercase tracking-[0.07em] font-[family-name:var(--font-dm-mono)] ${t.color}`}>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center font-[family-name:var(--font-dm-mono)] text-sm text-[var(--muted)]" style={{ gridColumn: '1 / -1' }}>
              Tidak ada project di kategori ini.
            </div>
          )}
        </div>
      </section>
    </>
  )
}