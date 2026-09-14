export default function Nav() {
  return (
    <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5 sm:px-14">
      <span className="nav-brand flex-1">Slowpour Roasters</span>
      <div className="hidden items-center gap-8 text-[14.5px] font-medium text-text md:flex">
        <a href="#roast" className="hover:text-accent-700">
          The roast
        </a>
        <a href="#how" className="hover:text-accent-700">
          How it works
        </a>
        <a href="#farms" className="hover:text-accent-700">
          Our farms
        </a>
      </div>
      <button type="button" className="btn btn-primary hidden md:inline-flex">
        Start a subscription
      </button>
    </nav>
  );
}
