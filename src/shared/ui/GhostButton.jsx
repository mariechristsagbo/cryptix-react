export function GhostButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/10 ${className}`}
    >
      <span>{children}</span>
    </a>
  );
}
