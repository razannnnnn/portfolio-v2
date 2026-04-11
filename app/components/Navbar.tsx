'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = ['Home', 'Projects', 'About', 'Contact']

  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 w-full z-[200] bg-[#fafafa]/85 backdrop-blur-sm py-[20px] px-[24px] min-[860px]:px-[48px] border-b-[1.5px] border-[var(--ink)]">
      <div className="nav-logo text-ink focus-visible:outline-none">
        <span className="logo-dot" />
        razan.dev
      </div>

      {/* Desktop nav */}
      <ul className="max-[767px]:hidden flex list-none text-[0.75rem] tracking-[0.08em] uppercase font-[family-name:var(--font-dm-mono)]" style={{ gap: '32px' }}>
        {navLinks.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link text-[var(--ink)] no-underline">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="max-[767px]:hidden block nav-cta shrink-0 font-mono text-[0.72rem] tracking-[0.08em] uppercase px-[18px] py-[7px] bg-transparent cursor-pointer hover:bg-black hover:text-[#FFFFFF] transition-colors duration-300"
        style={{ border: '1.5px solid var(--ink)' }}
      >
        Hire Me
      </button>

      {/* Hamburger */}
      <button
        className="hidden max-[767px]:flex flex-col justify-center items-center gap-[4px] w-[36px] h-[36px] border-[1.5px] border-[var(--ink)] bg-transparent cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`w-[16px] h-[1.5px] bg-[var(--ink)] transition-all duration-300 origin-center ${isOpen ? 'translate-y-[5.5px] rotate-45' : ''}`} />
        <div className={`w-[16px] h-[1.5px] bg-[var(--ink)] transition-all duration-300 origin-center ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <div className={`w-[16px] h-[1.5px] bg-[var(--ink)] transition-all duration-300 origin-center ${isOpen ? '-translate-y-[5.5px] -rotate-45' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      <div
        className={`
          absolute top-[calc(100%+1.5px)] left-0 w-full
          bg-[var(--bg)]/95 backdrop-blur-sm
          min-[768px]:!hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        {/* Links */}
        <ul className="flex flex-col list-none px-[24px] pt-[8px] pb-[4px]">
          {navLinks.map((item) => (
            <li key={item} className="border-b-[1px] border-[var(--ink)]/15 last:border-none">
              <a
                href={`#${item.toLowerCase()}`}
                className="flex items-center w-full py-[14px] text-[var(--ink)] no-underline font-[family-name:var(--font-dm-mono)] text-[0.75rem] tracking-[0.08em] uppercase transition-opacity hover:opacity-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me button */}
        <div className="px-[24px] pb-[20px] pt-[8px]">
          <button
            className="w-full font-[family-name:var(--font-dm-mono)] text-[0.75rem] tracking-[0.08em] uppercase px-[18px] py-[11px] bg-transparent text-[var(--ink)] cursor-pointer border-[1.5px] border-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[#FFFFFF]"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}