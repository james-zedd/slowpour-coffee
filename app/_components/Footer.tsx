export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 bg-surface sm:px-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center text-[11px] leading-[1.5] text-neutral-800 sm:text-[12px]">
        <p>
          &copy; {year} — a fictional company. This site is a demonstration
          project only.
        </p>
      </div>
    </footer>
  );
}
