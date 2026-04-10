export default function Footer() {
  return (
    <footer className="flex justify-between items-center font-[family-name:var(--font-dm-mono)] text-[0.65rem] uppercase tracking-wider"
      style={{ padding: '28px 48px', color: 'var(--muted)' }}>
      <div className="flex items-center gap-3">
        <span className="w-[10px] h-[10px] rounded-full" style={{ background: 'var(--green)', border: '1.5px solid var(--ink)' }} />
        razan.dev
        <span style={{ color: 'var(--red)', fontSize: '0.9rem' }}>×</span>
        Made with passion
      </div>
      <div>© 2025 · All rights reserved</div>
      <div className="flex gap-5">
        {['GitHub', 'LinkedIn', 'Instagram'].map((l) => (
          <a key={l} href="#" className="no-underline hover:text-[var(--ink)] transition-colors" style={{ color: 'var(--muted)' }}>{l}</a>
        ))}
      </div>
    </footer>
  )
}