'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div id="contact" className="contact-grid grid" style={{ gridTemplateColumns: '1fr 1fr', borderBottom: '1.5px solid var(--ink)' }}>
      {/* Left dark */}
      <div className="contact-pattern relative flex flex-col gap-6 overflow-hidden"
        style={{ padding: '80px 48px', borderRight: '1.5px solid var(--ink)', background: 'var(--ink)', color: 'white' }}>
        <span className="font-[family-name:var(--font-dm-mono)] text-[0.65rem] tracking-[0.12em] uppercase relative" style={{ color: '#888' }}>
          × Kontak
        </span>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold relative"
          style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-2px', lineHeight: '1.05' }}>
          Mari<br />
          <span style={{ color: 'var(--blue)' }}>Berkolaborasi</span><br />
          <span style={{ color: 'var(--red)' }}>Bersama</span><br />
          <span style={{ color: 'var(--green)' }}>Yuk!</span>
        </h2>
        <p className="font-[family-name:var(--font-dm-mono)] text-[0.78rem] relative" style={{ color: '#bbb', lineHeight: '1.7' }}>
          Ada project menarik? Atau sekedar mau ngobrol soal web dev? Jangan ragu untuk reach out!
        </p>
        <span className="font-[family-name:var(--font-syne)] font-semibold text-[0.88rem] relative w-fit"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '3px' }}>
          razan@razan.dev
        </span>
      </div>

      {/* Right form */}
      <div className="flex flex-col gap-4 justify-center" style={{ padding: '80px 48px' }}>
        <div>
          <div className="font-[family-name:var(--font-syne)] font-bold text-[1rem] mb-1" style={{ letterSpacing: '-0.3px' }}>Kirim Pesan</div>
          <div className="font-[family-name:var(--font-dm-mono)] text-[0.7rem] mb-5" style={{ color: 'var(--muted)' }}>Balas dalam 24 jam ×</div>
        </div>
        {[
          { name: 'nama',  label: 'Nama',  type: 'text',  placeholder: 'Nama kamu' },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'email@kamu.com' },
        ].map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label className="font-[family-name:var(--font-dm-mono)] text-[0.65rem] uppercase tracking-widest">{field.label}</label>
            <input name={field.name} type={field.type} placeholder={field.placeholder}
              value={form[field.name as keyof typeof form]} onChange={handleChange}
              className="font-[family-name:var(--font-dm-mono)] text-[0.78rem] px-4 py-[10px] bg-white outline-none transition-all focus:shadow-[3px_3px_0_var(--blue)]"
              style={{ border: '1.5px solid var(--ink)' }} />
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <label className="font-[family-name:var(--font-dm-mono)] text-[0.65rem] uppercase tracking-widest">Pesan</label>
          <textarea name="pesan" placeholder="Ceritain project kamu..." rows={4}
            value={form.pesan} onChange={handleChange}
            className="font-[family-name:var(--font-dm-mono)] text-[0.78rem] px-4 py-[10px] bg-white outline-none resize-none transition-all focus:shadow-[3px_3px_0_var(--blue)]"
            style={{ border: '1.5px solid var(--ink)', height: '90px' }} />
        </div>
        <button className="font-[family-name:var(--font-dm-mono)] text-[0.75rem] uppercase tracking-wider py-3 text-white cursor-pointer transition-colors hover:bg-[#333] mt-1"
          style={{ background: 'var(--ink)', border: '1.5px solid var(--ink)' }}>
          Kirim Pesan →
        </button>
      </div>
    </div>
  )
}