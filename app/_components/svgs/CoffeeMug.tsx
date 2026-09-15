type CoffeeMugProps = {
  className?: string;
};

export default function CoffeeMug({ className }: CoffeeMugProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="var(--color-accent-700)"
      strokeWidth="4.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="A mug of coffee with steam rising"
    >
      <path d="M36 30c4.5-6-4.5-10 0-16" />
      <path d="M50 26c4.5-6-4.5-10 0-16" />
      <path d="M64 30c4.5-6-4.5-10 0-16" />
      <path d="M26 44v14a22 22 0 0 0 44 0V44z" fill="var(--color-accent-400)" />
      <path d="M70 50a12 12 0 0 1 0 20" />
      <path d="M18 88h64" />
    </svg>
  );
}
