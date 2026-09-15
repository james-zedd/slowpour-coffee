export default function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
      fill="none"
      stroke="var(--color-accent-700)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.5" fill="var(--color-accent-400)" />
      <path d="M12 2.5v3" />
      <path d="M12 18.5v3" />
      <path d="M2.5 12h3" />
      <path d="M18.5 12h3" />
      <path d="M5.5 5.5l2 2" />
      <path d="M16.5 16.5l2 2" />
      <path d="M18.5 5.5l-2 2" />
      <path d="M7.5 16.5l-2 2" />
    </svg>
  );
}
