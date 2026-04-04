import { ArrowRightIcon } from "../icons";

export function PrimaryButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`button-shine button-primary group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-medium text-[#06110d] transition-transform duration-300 -translate-y-0.5 ${className}`}
    >
      <span className="button-primary__glow" aria-hidden="true" />
      <span className="button-primary__surface" aria-hidden="true" />
      <span className="button-primary__overlay" aria-hidden="true" />
      <span className="button-shine__beam" aria-hidden="true" />
      <span className="relative z-[1]">{children}</span>
      <ArrowRightIcon className="relative z-[1] h-4 w-4" />
    </a>
  );
}
