import { navLinks } from "../../data";
import { LogoMark } from "../../../../shared/icons";
import { Container, GhostButton } from "../../../../shared/ui";

export function Navbar({ isOpen, onToggle, onNavigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <Container className="rounded-[28px] border border-white/10 bg-[rgba(8,7,14,0.8)] backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <LogoMark className="h-6 w-[26px]" />
            <span className="text-base font-medium tracking-[-0.03em] text-white">
              Cryptix
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#b0b0b0] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <GhostButton href="#pricing">Get started</GhostButton>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={onToggle}
            aria-label="Toggle navigation"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-white/10 py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#b0b0b0]"
                  onClick={onNavigate}
                >
                  {link.label}
                </a>
              ))}
              <GhostButton href="#pricing" className="justify-center">
                Get started
              </GhostButton>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
