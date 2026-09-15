export default function LandscapeGraphic() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-[110px] w-[110px] sm:h-[196px] sm:w-[196px]"
      role="img"
      aria-label="Rolling hills under a soft sun, beside the coastline"
    >
      <circle
        cx="72"
        cy="26"
        r="10"
        fill="var(--color-accent-400)"
        stroke="var(--color-accent-700)"
        strokeWidth="3.2"
      />
      <path
        d="M4 70C18 42 34 42 48 60C58 48 72 48 96 68V84H4Z"
        fill="var(--color-accent-2-200)"
      />
      <path
        d="M4 84C16 64 30 64 44 78C56 66 74 66 96 84Z"
        fill="var(--color-accent-2-500)"
        stroke="var(--color-accent-2-800)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 91h88"
        fill="none"
        stroke="var(--color-accent-700)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M14 95h72"
        fill="none"
        stroke="var(--color-accent-700)"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
