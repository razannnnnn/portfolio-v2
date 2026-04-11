export default function Footer() {
  return (
    <footer className="flex flex-col min-[860px]:flex-row justify-between items-center font-[family-name:var(--font-dm-mono)] text-[0.6rem] uppercase tracking-[0.07em] text-[var(--muted)] border-t-[1.5px] border-[var(--ink)] p-[18px_24px] min-[860px]:p-[22px_52px] gap-[10px] min-[860px]:gap-0">
      <div className="flex items-center gap-[10px]">
        <span className="w-[8px] h-[8px] rounded-full bg-[var(--green)] border-[1.5px] border-[var(--ink)] inline-block" />
        razan.dev
        <span className="text-[var(--red)] text-[0.85rem]">×</span>
        Made with passion
      </div>
      <div>© 2025 · All rights reserved</div>
      <div className="flex gap-[20px]">
        <a href="https://github.com/razannnnnn" target="_blank" rel="noopener noreferrer" className="no-underline text-[var(--muted)] hover:text-[var(--ink)] transition-colors">GitHub</a>
        <a href="https://instagram.com/razaneoeo" target="_blank" rel="noopener noreferrer" className="no-underline text-[var(--muted)] hover:text-[var(--ink)] transition-colors">Instagram</a>
      </div>
    </footer>
  )
}