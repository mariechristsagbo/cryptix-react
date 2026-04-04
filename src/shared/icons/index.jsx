export function LogoMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 26 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21.5098 13.1826C22.7136 13.1826 23.3069 14.6466 22.4427 15.4847L14.4801 23.2069C13.9557 23.7155 13.2539 23.9999 12.5234 23.9999L3.30672 23.9999C2.10292 23.9999 1.50962 22.536 2.37378 21.6979L10.3364 13.9756C10.8608 13.467 11.5626 13.1826 12.2931 13.1826L21.5098 13.1826Z"
        fill="#00FFB2"
        fillOpacity="0.8"
      />
      <path
        d="M21.7715 6.47949C22.9753 6.47949 23.5686 7.94347 22.7044 8.78154L14.8593 16.3898C14.2596 16.9715 13.4569 17.2968 12.6214 17.2968L3.56844 17.2968C2.36464 17.2968 1.77134 15.8328 2.6355 14.9948L10.5981 7.27249C11.1225 6.76391 11.8243 6.47949 12.5548 6.47949L21.7715 6.47949Z"
        fill="#00FFB2"
        fillOpacity="0.8"
      />
      <path
        d="M21.5098 0C22.7136 0 23.3069 1.46398 22.4427 2.30205L14.4801 10.0243C13.9557 10.5329 13.2539 10.8173 12.5234 10.8173L3.30672 10.8173C2.10292 10.8173 1.50962 9.35334 2.37378 8.51527L10.3364 0.793001C10.8608 0.284422 11.5626 0 12.2931 0L21.5098 0Z"
        fill="#00FFB2"
        fillOpacity="0.8"
      />
    </svg>
  );
}

export function StarIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.75l2.68 5.43 6 .87-4.34 4.23 1.02 5.98L12 16.43 6.64 19.26l1.02-5.98L3.32 9.05l6-.87L12 2.75z" />
    </svg>
  );
}

export function ShieldIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3.5V11c0 5.1-3 8.76-7 10-4-1.24-7-4.9-7-10V6.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M9.2 12.2l1.9 1.9 3.7-4.1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function BoltIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13.2 2.5L5.8 13h4.7l-.9 8.5L18.2 11h-4.8l-.2-8.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CoinIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.2 10.1c0-1.2 1.1-2.1 2.8-2.1 1.3 0 2.3.5 2.9 1.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14.8 13.9c0 1.2-1.1 2.1-2.8 2.1-1.3 0-2.3-.5-2.9-1.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v10" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function GridIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function CheckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.2 4.2L19 7.8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ChevronIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
