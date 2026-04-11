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

      <ul className="hidden xl:flex list-none text-[0.75rem] tracking-[0.08em] uppercase font-[family-name:var(--font-dm-mono)] md:flex" style={{ gap: '32px' }}>
        {navLinks.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link text-[var(--ink)] no-underline">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="hidden md:block nav-cta shrink-0 font-mono text-[0.72rem] tracking-[0.08em] uppercase px-[18px] py-[7px] bg-transparent cursor-pointer hover:bg-black hover:text-[#FFFFFF] transition-colors duration-300"
        style={{ border: '1.5px solid var(--ink)' }}
      >
        Hire Me
      </button>

      {/* Hamburger Menu (Mobile) */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-[36px] h-[36px] border-[1.5px] border-[var(--ink)] bg-transparent cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`w-[16px] h-[1.5px] bg-[var(--ink)] transition-all duration-300 origin-center ${isOpen ? 'translate-y-[4px] rotate-45' : 'mb-[3px]'}`} />
        <div className={`w-[16px] h-[1.5px] bg-[var(--ink)] transition-all duration-300 origin-center ${isOpen ? '-translate-y-[4px] -rotate-45' : 'mt-[3px]'}`} />
      </button>

      {/* Dropdown Menu (Mobile) */}
      <div 
        className={`absolute top-[100%] left-0 w-full bg-[var(--bg)] flex-col md:hidden border-b-[1.5px] border-[var(--ink)] border-t-[1.5px] shadow-2xl ${isOpen ? 'flex' : 'hidden'}`}
      >
        <ul className="flex flex-col list-none">
          {navLinks.map((item) => (
            <li key={item} className="border-b-[1.5px] border-[var(--ink)] group">
              <a 
                href={`#${item.toLowerCase()}`} 
                className="flex justify-between items-center w-full px-[28px] py-[24px] text-[var(--ink)] no-underline group-hover:bg-[var(--ink)] group-hover:text-[#FFFFFF] transition-all duration-300 font-[family-name:var(--font-syne)] font-bold text-[1.4rem] tracking-[-1px] uppercase"
                onClick={() => setIsOpen(false)}
              >
                <span>{item}</span>
                <span className="text-[1.2rem] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↗</span>
              </a>
            </li>
          ))}
          <li className="px-[28px] py-[32px] flex justify-center">
            <button 
              className="w-full font-[family-name:var(--font-dm-mono)] text-[0.8rem] tracking-[0.1em] uppercase px-[20px] py-[16px] bg-transparent text-[var(--ink)] cursor-pointer border-[1.5px] border-[var(--ink)] transition-all shadow-[4px_4px_0_var(--ink)] hover:shadow-[0_0_0_var(--ink)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-[var(--ink)] hover:text-[#FFFFFF]" 
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}