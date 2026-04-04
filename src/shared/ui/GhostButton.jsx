export function GhostButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`button-shine group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/10 ${className}`}
    >
      <span className="button-shine__beam" aria-hidden="true" />
      <span className="relative z-[1]">{children}</span>
    </a>
  );
}
