export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-300 px-6 py-8 sm:px-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-1 text-center text-[11px] leading-[1.5] text-neutral-800 sm:flex-row sm:justify-between sm:text-left sm:text-[12px]">
        <span className="font-heading text-[13px] text-text sm:text-[14px]">
          Slowpour Roasters
        </span>
        <p>
          &copy; {year} — a fictional company. This site is a demonstration
          project only.
        </p>
      </div>
    </footer>
  );
}
