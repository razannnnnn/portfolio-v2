'use client'
import { useState, useEffect } from 'react'

interface CrossItem {
  id: number
  char: string
  left: string
  top: string
}

export default function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' })
  const [crosses, setCrosses] = useState<CrossItem[]>([])

  useEffect(() => {
    const generated: CrossItem[] = []
    for (let i = 0; i < 30; i++) {
      generated.push({
        id: i,
        char: Math.random() > 0.5 ? '×' : '+',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
      })
    }
    setCrosses(generated)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <section id="contact" className="grid grid-cols-1 min-[860px]:grid-cols-2">

      {/* ── Left (dark) ── */}
      <div className="
        contact-pattern relative overflow-hidden flex flex-col gap-[32px]
        p-[56px_24px] min-[860px]:p-[80px_52px]
        bg-[var(--ink)] text-white
        max-[859px]:border-b-[1.5px] min-[860px]:border-r-[1.5px] border-[var(--ink)]
      ">
        {/* contact-crosses: floating chars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden max-[860px]:hidden">
          {crosses.map(c => (
            <span key={c.id} className="absolute text-[rgba(255,255,255,.06)] text-[11px]"
              style={{ left: c.left, top: c.top }}>
              {c.char}
            </span>
          ))}
        </div>

        <span className="font-[family-name:var(--font-dm-mono)] text-[0.6rem] tracking-[0.12em] uppercase text-[#777] relative">
          × Kontak
        </span>

        <h2 
          className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.08] tracking-[-0.3px] relative" 
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          <span className="block text-[#FFFFFF]">Let&apos;s</span>
          <span className="block text-[var(--blue)]">Build</span>
          <span className="block text-[var(--red)]">Something</span>
          <span className="block text-[var(--green)]">Together.</span>
        </h2>

        <p className="font-[family-name:var(--font-dm-mono)] text-[0.75rem] text-[#aaa] leading-[1.8] relative">
          Ada project menarik? Mau kolaborasi? Atau sekadar ngobrol soal web dev — reach out ya!
        </p>

        <span className="font-[family-name:var(--font-syne)] text-[0.85rem] font-bold border-b-[1px] border-[rgba(255,255,255,.3)] pb-[3px] w-fit relative tracking-[-0.2px] text-[#FFFFFF]">
          hello@razan.dev
        </span>
      </div>

      {/* ── Right (form) ── */}
      <div className="flex flex-col gap-[14px] justify-center p-[56px_24px] min-[860px]:p-[80px_52px]">

        <div className="font-[family-name:var(--font-syne)] font-extrabold text-[1rem] tracking-[-0.3px] mb-[2px]">
          Kirim Pesan
        </div>
        <div className="font-[family-name:var(--font-dm-mono)] text-[0.67rem] text-[var(--muted)] mb-[14px]">
          Balas dalam 24 jam ×
        </div>

        {[
          { name: 'nama',  label: 'Nama',  type: 'text',  placeholder: 'Nama kamu' },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'email@kamu.com' },
        ].map((field) => (
          <div key={field.name} className="flex flex-col gap-[5px]">
            <label className="font-[family-name:var(--font-dm-mono)] text-[0.6rem] uppercase tracking-[0.1em]">
              {field.label}
            </label>
            <input
              name={field.name} type={field.type} placeholder={field.placeholder}
              value={form[field.name as keyof typeof form]} onChange={handleChange}
              className="font-[family-name:var(--font-dm-mono)] border-[1.5px] border-[var(--ink)] px-[13px] py-[9px] text-[0.75rem] bg-white outline-none transition-[box-shadow,border-color] duration-200 focus:border-[var(--blue)] focus:shadow-[3px_3px_0_var(--blue)] placeholder:text-[#bbb]"
            />
          </div>
        ))}

        <div className="flex flex-col gap-[5px]">
          <label className="font-[family-name:var(--font-dm-mono)] text-[0.6rem] uppercase tracking-[0.1em]">
            Pesan
          </label>
          <textarea
            name="pesan" placeholder="Ceritain project kamu..."
            value={form.pesan} onChange={handleChange}
            className="font-[family-name:var(--font-dm-mono)] border-[1.5px] border-[var(--ink)] px-[13px] py-[9px] text-[0.75rem] bg-white outline-none resize-none h-[88px] transition-[box-shadow,border-color] duration-200 focus:border-[var(--blue)] focus:shadow-[3px_3px_0_var(--blue)] placeholder:text-[#bbb]"
          />
        </div>

        <button
          onClick={() => {}}
          className="font-[family-name:var(--font-dm-mono)] border-[1.5px] border-[var(--ink)] bg-[var(--ink)] text-[#FFFFFF] py-[11px] text-[0.7rem] tracking-[0.08em] uppercase mt-[4px] transition-colors duration-200 hover:bg-[#333] cursor-pointer"
        >
          Kirim Pesan →
        </button>
      </div>
    </section>
  )
}

