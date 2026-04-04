import { ArrowRightIcon } from "../icons";

export function PrimaryButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-[#00ffb2] px-5 py-3 text-sm font-medium text-[#08070e] transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <span>{children}</span>
      <ArrowRightIcon className="h-4 w-4" />
    </a>
  );
}
